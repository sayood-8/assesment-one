"use client";

import { useEffect, useState } from "react";
import axios, {AxiosResponse} from "axios"

export default function finalTask(){
 
interface R{
      title : string
      id : number
      completed: boolean
}
const [records, setRecords] = useState<R[]>([]); //specified the type of interface R
const [error,setErrors] = useState({});


 useEffect(() => {
    axios.get<R[]>("https://jsonplaceholder.typicode.com/todos")
    .then((res :AxiosResponse) => {
      setRecords(res.data.slice(3,4)); // just one user because no space for all
      console.clear();
      console.log('response: ', res.data);
    });
    },[])

return(
   <>
   <div>
      <div>This is the Id : {(records.length > 0) ? records.map((record:R) => (record.id)): ("loading .. ") }</div>
      <div>This is the Title : {(records.length > 0) ? records.map((record:R) => (record.title)): ("loading .. ") }</div>
      <div>This is the completed status : {(records.length > 0) ? records.map((record:R) => (record.completed + "")): ("loading .. ") }</div>
   </div>
   </>
)
}