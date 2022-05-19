import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import {
	MdOutlineAssignment,
	MdOutlineLibraryBooks,
	MdOutlineQuiz
} from 'react-icons/md';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';

function SideBar() {
	const [barVisiblity, setBarVisiblity] = React.useState(true);

	const changeBar = () => {
		setBarVisiblity(!barVisiblity);
	};

	return (
		<div className="h-screen sm:sticky sm:top-0">
			{barVisiblity && (
				<AiOutlineMenu
					className=" w-8 h-8 fill-gray-500 hover:fill-gray-800 sm:hidden border-2 hover:border-blue-600 absolute left-2 top-2 p-1 rounded-md cursor-pointer"
					onClick={changeBar}
				/>
			)}
			<div
				className={
					'flex flex-col p-2 bg-gray-700 w-60 text-white h-full sm:relative fixed sm:flex  ' +
					(barVisiblity && 'hidden')
				}
			>
				<AiOutlineCloseCircle
					className="w-8 h-8 hover:fill-gray-700 absolute -right-8 sm:hidden cursor-pointer"
					onClick={changeBar}
				/>
				<h1 className="text-2xl font-bold">CODEYOGI</h1>
				<Link to="/Assignments" onClick={changeBar}>
					<Button icon={<MdOutlineAssignment className="w-6 h-6" />}>
						Assignments
					</Button>
				</Link>
				<Link to="/Lectures" onClick={changeBar}>
					<Button icon={<MdOutlineLibraryBooks className="w-6 h-6" />}>
						Lectures
					</Button>
				</Link>
				<Link to="/quizpage">
					<Button icon={<MdOutlineQuiz className="w-6 h-6" />}>Quiz</Button>
				</Link>
        <Link to="/student">
					<Button icon={<MdOutlineQuiz className="w-6 h-6" />}>Students</Button>
				</Link>
     <span className="grow"></span>
        <Link to="/profile">
					<Button icon={<MdOutlineQuiz className="w-6 h-6" />}>Profile</Button>
				</Link>
        <Link to="/logout">
					<Button icon={<MdOutlineQuiz className="w-6 h-6" />}>Logout</Button>
				</Link>
			</div>
		</div>
	);
}
export default SideBar;
