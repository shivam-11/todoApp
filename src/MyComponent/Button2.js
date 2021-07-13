import React from 'react';
import '../App.css';
import {useDispatch} from "react-redux";
import {boolvalue} from "../actions/index";
import {Button} from "antd";

export const Button2 = () =>{
    const dispatch = useDispatch();
    return (
        <> 
            <Button onClick = {() => dispatch(boolvalue(0))} className = "border-2 bg-green-400 py-1 px-3 my-2 hover:border-gray-500"> show active task </Button>
        </>  
    )
};