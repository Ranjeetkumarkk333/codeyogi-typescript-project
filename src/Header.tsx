import React from 'react';
import { Link } from 'react-router-dom';
import { BiTimeFive, BiLogOut } from 'react-icons/bi';

function Header() {
	return (
		<div className="bg-gray-500 text-white flex justify-between px-10">
			<div className="flex items-center">
				<div>
					<Link to="/Lectures" className="border-r-2 border-white pr-4 mr-4">
						Code yogi
					</Link>
				</div>
				<h3>Welcome, Ranjeet</h3>
			</div>
			<div className="flex">
				<div className="flex bg-blue-500 items-center p-4 mr-6">
					<BiTimeFive />
					<span>00:00</span>
				</div>
				<div className="flex bg-blue-500 items-center p-4 cursor-pointer">
					<BiLogOut />
					<span>Logout</span>
				</div>
			</div>
		</div>
	);
}
export default Header;
