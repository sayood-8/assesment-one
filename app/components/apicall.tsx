"use client";

import { useEffect, useState } from "react";


export default function finalTask(){
 
const [records, setRecords] = useState([]);
const [error,setErrors] = useState({});

interface R{
 title : string
 id : number
 completed: boolean
}
 useEffect(() => {
    
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(response => response.json())
   .then(res => setRecords(res.slice(0,1))) //to get 1 record rather than 1
   .catch(errors => setErrors(errors)) // to handle any errors 
    },[])

return(
   <>
   <div>
      This is the Data : {(records.length > 0) ? records.map((record:R) => (record.title)): ("loading .. ") }
   </div>
   </>
)
}