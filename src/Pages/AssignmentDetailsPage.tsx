import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../Button';
import { BsBoxArrowUpRight, BsCheckCircle } from 'react-icons/bs';
import { DateTime } from 'luxon';
import MDEditor from '@uiw/react-md-editor';
import { getAssignmentDetail } from "../Api"
import useForm from '../useForm';
import SubmitionForm from '../SubmitionForm';
import DetailRow from "../DetailRow";
import A from '../A'
import {assignmentDetail} from "../Models/assignmentDetail"

const AsDetailsPage = () => {
  const { formValue, onInputChange, onSubmit, handleBlur, openPopup, closePopup, } = useForm();
  const [assignmentDetail, setAssignmentDetail] = React.useState<assignmentDetail[]>([]);
  const data = useParams();
  const assigmentdId:any = data.id;
  console.log('assigmentdId', assigmentdId);
  React.useEffect(
    () => {
      const token = getAssignmentDetail(assigmentdId);

      token.then(response => {
        setAssignmentDetail(response);
        console.log('detais', response);
      });
    },
    [assigmentdId]
  );

  return (
    <div className="">
      {formValue.popup && (
        <SubmitionForm
          onClick={onSubmit}
          value={formValue.submitionLink}
          onChange={onInputChange}
          urlValid={formValue.urlValid}
          urlError={formValue.Error}
          onBlur={handleBlur}
          touched={formValue.touched}
          closePopup={closePopup}
        />
        
      )}
      <div className="p-10 bg-white border-2 border-gray-200 shadow-md ">
        <h3 className="p-4 text-lg font-semibold ">Assignment Details</h3>
        <hr />
        <div className="space-y-6">
          <DetailRow
            heading="Title"
            detail={assignmentDetail.title}
            />
          <DetailRow
            heading="Due Date"
            detail={DateTime.fromISO(assignmentDetail.due_date).toFormat('ccc LLL dd yyyy')}
            />
          <DetailRow
            heading="Description"
           detail={<MDEditor.Markdown
              source={assignmentDetail.description}
              className="px-2 rounded-md !bg-white !text-gray-700 "
            />}
          />
        </div>
        <div className="flex py-2 ">
          <div className="text-white border rounded-md mr-6 bg-blue-500 font-medium">
            <Button onClick={()=>openPopup(assigmentdId)} icon={<BsCheckCircle />}>Re-submit</Button>
          </div>
          <div className="text-blue-600 self-center">
            <A>See Your Submission</A>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsDetailsPage;
