import React from 'react';
import { useField } from 'formik';

function ProfileRow({ type, placeholder, children, note, name }) {
  const [field] = useField(name);
	return (
		<>
			<div className="flex flex-col sm:flex-row sm:items-center  py-4 mb-4 sm:pr-6">
				<div className=" mb-2 sm:mb-0 text-md font-medium text-gray-500 sm:w-1/2">
				
					<h3>{children}<span className={"text-red-500 " + (!note && " text-lg") } >{note || "*"}</span></h3>
          
				</div>
				<input
          {...field}
					type={type}
					className="border border-gray-300 rounded-md bg-slate-50 py-2 w-full px-2 "
					placeholder={placeholder}
				/>
        <span className="h-5"></span>
			</div>
			<hr className="hidden sm:block" />
		</>
	);
}
export default ProfileRow;
