import React from "react";
import StudentCard from "../StudentCard"
import {getStudentData} from "../Api"
// import {useContext} from "react"
// import  AlertContext  from '../AlertContext';
import { Student } from "../Models/Student"

function StudentPage() {
  // const {showAlert} = useContext(AlertContext)
  const [students, setStudents] = React.useState<Student[]>([])
  
  React.useEffect(() => {
const token = getStudentData();
  token.then((response) => {
    setStudents(response);
    // showAlert("Student data loaded")
  });
  }, []);

  
  return (
      <div className="flex flex-wrap justify-around space-y-2" >
   {students.map(s => ( <StudentCard student={s} key={s.name.first}  ></StudentCard>)
  ) }
    </div>
  );
}
export default StudentPage; 