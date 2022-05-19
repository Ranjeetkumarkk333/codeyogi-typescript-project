import React from 'react';
import LeCard from '../LectureCard';
// import { DateTime } from "luxon";
import {getLectures} from "../Api"
import {Lecture} from "../Models/Lecture"

// import {useContext} from "react"
// import  AlertContext  from '../AlertContext';

function LecturePage() {
  // const {showAlert} =useContext(AlertContext)
  const [lectures, setLectures] = React.useState<Lecture[]>([])
React.useEffect(() => {
const token = getLectures()
 
  token.then((response) => {
    setLectures(response)
    console.log(response)
    // showAlert("Lectures Loaded")
  });
  }, []);
  
  
	return (
		<div className="space-y-4">
			{lectures.map(data => (
				<LeCard
          start_time={data.start_time}
          end_time={data.end_time}
					key={data.id}
					lectureNo={lectures.length-lectures.indexOf(data)}
					
					topic={data.topic}
			recording_url={data.recording_url}
				/>
      
  
			))}
     
		</div>
	);
}
export default LecturePage;
