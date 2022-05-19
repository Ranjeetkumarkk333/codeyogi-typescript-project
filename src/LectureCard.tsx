import {FC} from 'react';
import A from './A';
// import { BsBoxArrowUpRight } from 'react-icons/bs';
import MDEditor from '@uiw/react-md-editor';
import { DateTime, Duration } from "luxon";
import {Lecture} from "./Models/Lecture"


const LeCard: FC<Lecture> = (props) => {
  
  const date1 = DateTime.fromISO(props.start_time);
	const date2 = DateTime.fromISO(props.end_time);

	const diff = date2.diff(date1, ['hours', 'minutes', 'seconds']);

	const durationString = diff.toISO();
	const duration = Duration.fromISO(durationString).toFormat('hh:mm:ss');

	
	const dateObject = DateTime.fromISO(props.start_time);
	const dateHumanReadable = dateObject.toLocaleString(DateTime.DATE_SHORT);
	return (
		<div className="bg-white p-2 rounded-md shadow-xl border space-y-2">
			<h1 className="font-medium">
				Lecture #{props.lectureNo}
				<span className="text-gray-500 ml-4">({dateHumanReadable})</span>
			</h1>
			<h3 className="text-gray-600 text-sm">Duration : {duration}</h3>
			<div className="pl-4 py-4 font-medium">
				<MDEditor.Markdown
					source={props.topic}
					className="Markdown p-2 rounded-md !bg-white !text-gray-700 "
				/>
			</div>
			<div className="flex justify-center text-gray-500">
				<A href={props.recording_url} >
					Watch/Download Recording
				</A>
			</div>
		</div>
	);
}

export default LeCard;
