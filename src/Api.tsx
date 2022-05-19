import axios from "axios"
import {Lecture} from "./Models/Lecture"
import {assignment} from "./Models/Assignment"
import {Student} from "./Models/Student"
import {assignmentDetail} from "./Models/assignmentDetail"

type studentRow = {results:Student[]}
const BASE_URL = "https://api.codeyogi.io/"

export const getAssignments = async () => {
  try {
    const response = await axios.get<assignment[]>(BASE_URL + "batches/1/assignments", { withCredentials: true })
    return response.data;
  } catch {
    return [];
  }
}

export const getLectures = async () => {
try {
    const response = await axios.get<Lecture[]>(BASE_URL + "batches/1/sessions", { withCredentials: true })
    return response.data;
} catch {
    return [];
  };
}

export const getAssignmentDetail = async (assigmentdId:number) => {
  try {
    const response = await axios.get<assignmentDetail[]>(BASE_URL + `assignments/${assigmentdId}`, { withCredentials: true })
  return response.data;
  } catch {
    return [];
  }
}
 export const getStudentData = async () => {
  try {
    const response = await axios.get<studentRow>("https://randomuser.me/api/?results=6");
    return response.data.results;
  } catch {
    return [];
  }
}

export const cacheData = (key:string, data:assignment[]) => {
  return localStorage.setItem(key, JSON.stringify(data));
}

export const getCatchData = (key:string):assignment[] => {
    const data: any  =localStorage.getItem(key)
 return JSON.parse(data)
}

export const submitAssignment = (Id:number, submitionLink:string) => {

  return axios.put(`https://api.codeyogi.io/${Id} `, {
    submitionLink, withCredentials: true })} 
