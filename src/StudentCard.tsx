import React from 'react';
import { Student } from "./Models/Student"
type studentProps = {student:Student} 

function StudentCard({ student }:studentProps) {
	return (
		<div className="w-72 h-80 flex flex-col shrink-0 rounded-md mt-4">
			<div className="h-52 px-4">
				<img
					className="w-full h-full object-top rounded-md"
					src={student.picture.large}
				/>
			</div>
			<div className="px-4 py-2">
				<div className="text-xl font-semibold">
					<h1>
						{student.name.first} {student.name.last}
					</h1>
					<h1 className="text-indigo-400">{student.location.city}, {student.location.country}</h1>
				</div>
				<div className="flex">
					<a href="https://mobile.twitter.com/login">
						<img
							className="w-8 h-8 mr-4 "
							src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
						/>
					</a>
					<a href="https://www.linkedin.com/signup">
						<img
							className="w-6 h-6 p-1 mt-1 bg-gray-300 rounded-md"
							src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}
export default StudentCard;
