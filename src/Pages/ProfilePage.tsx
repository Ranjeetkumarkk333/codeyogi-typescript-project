import React from 'react';
import Input from '../Input';
import { Formik, Form } from 'formik';
import { string, object, number } from 'yup';
// import {useContext} from "react"
// import  AlertContext  from '../AlertContext';


const ProfilePage = () => {
   // const {showAlert} =useContext(AlertContext)
  const validationSchema = object().shape({
    first_name: string().required().max(15),
    last_name: string().required().max(15),
    email: string().required().email(),
    branch: string().required(),
    year_of_passout: number().required().positive(),
    phone_number: number().required().positive(),
    date_of_birth: number().required().positive(),
    roll_number: number().required().positive(),
  });
  const onSubmit = () => {
    console.log('success');
    // showAlert('Updated Successfully');
  };
  const initialValues = {
    first_name: "Ranjeet",
    last_name: "Kumar",
    email: "ranjeetkumarkk333@gmail.com",
    institute_name: "GP Kashipur",
    branch: "Mechanical",
    year_of_passout:"2022",
    roll_number:"19009140027",
    phone_number: "8191968925",
    date_of_birth: "27-03-2002"
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        
          <div className="bg-white px-2">

            <h1 className="text-xl mb-4 "> Personal details </h1>
            <hr />
            <Form onSubmit={onSubmit}>
            <Input name="first_name" key="first_name" type="text" placeholder="first name">
              First name
				</Input>
            <Input name="last_name" key="last_name" id="last_name" type="text" placeholder="last name " note=" (Skip only if you don't have it in official documents)">
              Last Name
				</Input>
            <Input name="email" id="email" type="text" placeholder="email address">
              E-mail Address{' '}
            </Input>
            <Input name="institute_name" id="institute_name" type="text" placeholder="institute name ">
              Institute Name
				</Input>
            <Input name="year_of_passout" id="year_of_passout" type="number"  placeholder="select">
              Year Of Passout{' '}
            </Input>
            <Input name="phone_number" id="phone_number" type="number" placeholder="phone number ">
              Phone Number{' '}
            </Input>
            <Input name="date_of_birth" id="date_of_birth" type= "text" placeholder="date of birth">
              Date of birth{' '}
            </Input>
            <Input name="roll_number" id="roll_number" type="number" placeholder="enter">
              Roll Number{' '}
            </Input>
            <Input name="branch" id="branch" type="text" placeholder="branch">
              Branch
				</Input>

          

          <button type="submit" className="border rounded-md bg-blue-500 px-4 py-2 mt-2">
            Update
			</button>
        </Form>
          </div>
      </Formik>
    </>
  );
}
export default ProfilePage;
