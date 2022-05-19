import { useState} from 'react';
import { submitAssignment, getCatchData } from './Api';
import { string } from 'yup';
import {assignment} from "./Models/Assignment"

export const useForm = () => {
 
  const cachedAssignment = getCatchData("assignment") || [];
  const [formValue, setFormValue] = useState({
    assignmentData: cachedAssignment,
    submitionLink: "",
    Id: +"",
    popup: false,
    Error: "",
    urlValid: false,
    touched: false,
  })
  const handleBlur = () => {
    setFormValue({ ...formValue, touched: true })
    // console.log("touched", formValue.touched);
  }

  const setAssignment = (response:assignment[]) => {
    setFormValue({ ...formValue, assignmentData: response })
  }

  const onInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    try {
      const urlValidator = string().required().url();
      urlValidator.validateSync(formValue.submitionLink);
      setFormValue({ ...formValue, submitionLink: event.target.value, urlValid: true, });
    } catch (e:any) {
      setFormValue({ ...formValue, Error: e.message, urlValid: false, submitionLink: event.target.value })
      return;
    }
  };

  const openPopup = (props:number) => {
    setFormValue({ ...formValue, popup: true, Id: props });
  };
  const closePopup = () => {
    setFormValue({ ...formValue, popup: false, touched: false, submitionLink: "" });
  };

  const onSubmit = () => {
    setFormValue({ ...formValue, submitionLink: "", popup: false, urlValid: false, touched: false })
    submitAssignment(formValue.Id, formValue.submitionLink)
    // showAlert("Assignment submitted succesfully")
  }
  return { formValue, onInputChange, setAssignment, onSubmit, handleBlur, openPopup, closePopup, }
}
export default useForm;