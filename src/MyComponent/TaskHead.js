import React from 'react';
import '../App.css';


export const TaskHead = (TH) =>{
    return (
        <> 
        <h1 className = "text-3xl font-bold"><u>{TH.TH.length} {TH.TH.desc}</u></h1>   
        </>  
    )
};