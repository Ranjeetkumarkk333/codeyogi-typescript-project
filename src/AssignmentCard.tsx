import React from 'react';
import Button from './Button';
import { BsBoxArrowUpRight, BsCheckCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import useForm from "./useForm"
import {assignmentProps} from "./Models/Assignment"


function AsCard({title, created_at, due_date, assignment_id, id, onClick,}: assignmentProps) {
  const formData = useForm();
  
const navigate = useNavigate();
const checkDetails = (Id:number)=> {
  navigate(`${Id}/details`)
  console.log("iiidddd", Id)
}

	return (
    <div>
      
		<div className="bg-white p-2 rounded-md shadow-xl border mb-5">
			<div onClick={()=>checkDetails(id)}>
				<h1 className="sm:mr-16 mb-4">
					#{assignment_id} {title}{' '}
					<span className="text-gray-500 ml-4 "> ({created_at})</span>
				</h1>
				<div className="flex flex-col sm:flex-row text-red-500 justify-between mb-6">
					<p>
						Due Date: {due_date}
						<span className="flex flex-col">
							(Submission will count as late now)
						</span>
					</p>
					<span className="text-green-500 mt-6 sm:mt-0">Submitted</span>
				</div>
			</div>

			<div className="flex py-2 justify-between">
				<div className="flex justify-center grow basis-0 text-green-500 sm:font-medium border-r-2 border-gray-300">
					<Button onClick={()=>onClick(id)} icon={<BsCheckCircle />}>
						Re-submit
					</Button>
				</div>
				<a  className="flex justify-center grow basis-0 sm:items-center space-x-1 text-blue-600 text-left ">
          <BsBoxArrowUpRight />
				<span className="underline flex flex-col text-sm sm:flex-row" >See Your <span>Submission</span></span>
        </a>
			</div>
		</div>
    </div>
	);
}

export default AsCard;
