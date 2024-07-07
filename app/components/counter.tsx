"use client";
import { useEffect, useState } from 'react';
import styles from "./counter.module.css" ;


export default function Counter() {
  const [count, setCount] = useState<number>(0);
  const handleClickInc = () => {setCount(count => count + 1);}
  const handleClickDec = () => {setCount(count => count - 1);}

  return (
    <>
    <div className ="counter">
    <div className ={styles.p}>{count}</div>
    <br></br>
    <button id ="button-2" className ={styles.button} onClick={handleClickDec}>Decrement</button>
    <button id ="button-1" className ={styles.button} onClick={handleClickInc}>Increment</button>
    </div>
    </>

    
  );
}