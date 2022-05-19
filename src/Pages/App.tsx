import {FC } from 'react';
import AssignmentPage from './AssignmentPage';
import LecturePage from './LecturePage';
import QuizPage from './QuizPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './MainLayout';
import AsDetailsPage from './AssignmentDetailsPage';
import ProfilePage from "./ProfilePage";
import StudentPage from "./StudentPage"
import { uniqueId } from 'lodash';

const App: FC = () => {
 
	return (
    
		<div>
      
			<Routes>
				<Route index element={<Navigate to="profile" />} />
        <Route path="*"  element={<Navigate to= "profile" />} />
				<Route path="/" element={<MainLayout />}>
					
					<Route path="Lectures" element={<LecturePage />} />
          <Route path="*" element={<LecturePage />} />
		  <Route path="Assignments" element={<AssignmentPage />} />
		  <Route
						path="Assignments/:id/details"
						element={<AsDetailsPage />}
					/>
          <Route
						path="student"
						element={<StudentPage />}
            />
          					<Route
						path="profile"
						element={<ProfilePage />}
					/>
				</Route>
			
				<Route path="quizpage" element={<QuizPage />} />

			</Routes>
      
		</div>
     
	);
}

export default App;

