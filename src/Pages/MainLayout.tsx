import React from 'react';
import SideBar from '../SideBar';
import { Outlet } from 'react-router-dom';

function MainLayout() {
	return (
		<div className=" flex relative ">
			<SideBar />
			<div className="grow bg-gray-100 px-3 sm:px-10 py-10 flex">
				<div className="grow bg-gray-50 px-4 sm:px-6 py-4">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
export default MainLayout;
