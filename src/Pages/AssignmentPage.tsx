import React from 'react';
import { useEffect } from 'react';
import AsCard from '../AssignmentCard';
import {
	getAssignments,
	cacheData,
} from '../Api';
import { DateTime } from 'luxon';
import SubmitionForm from '../SubmitionForm';
import useForm from '../useForm';
// import {useContext} from "react"
// import  AlertContext  from '../AlertContext';

const AssignmentPage = () => {
  // const {showAlert} =useContext(AlertContext)
	const { formValue, onInputChange, setAssignment, onSubmit, handleBlur, openPopup, closePopup, } = useForm();

	useEffect(() => {
		const promise = getAssignments();

		promise.then(response => {
			setAssignment(response);
			cacheData('assignment', response);
      // showAlert("Assignment loaded");
			console.log(response);
		});
	}, []);

	return (
		<div className="space-y-4">
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
			{formValue.assignmentData.map(data => (
				<AsCard
          // href={data.submissions[0].submission_link}
					onClick={openPopup}
					assignment_id={data.assignment_id}
					key={data.id}
					id={data.id}
					title={data.title}
					created_at={DateTime.fromISO(data.created_at).toFormat('ccc LLL dd yyyy')}
					due_date={DateTime.fromISO(data.due_date).toFormat('ccc LLL dd yyyy')}
				/>
			))}
		</div>
	);
}
export default AssignmentPage;
