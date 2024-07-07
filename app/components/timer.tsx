"use client";

import { useEffect, useState } from "react";
import styles from "./counter.module.css" ;

export default function Timer(){
    const [timer,setTimer] = useState<number>(0);
    const [check, setCheck] = useState <boolean>(true);

    const handleClickStop = () => {
        setCheck(false);
    }
    const handleClickResume = () => {
        setCheck(true);
    }

    useEffect(() => {
        const interval = setInterval(() => {
          if (check) {
            setTimer(prev => prev + 1);
          }
        }, 1000);
    
        return () => clearInterval(interval);
      }, [check]);

    return (
        <>
        <div>
            <div className = {styles.p}>{timer}</div>
            <br></br>
            <button onClick={() =>  handleClickStop()} className={styles.button}>stop</button>
            <button onClick={() =>  handleClickResume()}  className={styles.button}>resume</button>
        </div>

        </>
    )
}