import React from 'react';
import '../App.css';
import {useDispatch} from "react-redux";
import {delet,completed,compdelet,editactive,editcompleted} from "../actions/index";
import {Button} from "antd";

export const Task = (list) =>{
    const dispatch = useDispatch();
    //console.log(list.list.fun)
    const active = (temp,id) => {
        console.log(temp,id);
        let v = prompt("edit value");
        if (temp === "active"){
            dispatch(editactive(id,v));
        }
        else
        {
            dispatch(editcompleted(id,v));
        }
    };


    return (
        <>
        <ul className = "list-disc mx-6 my-1">
            <li> <h1 className="text-2xl"> {list.list.val} </h1> </li> 
            <Button className = "border-2 bg-green-300 px-1 mx-1 hover:border-gray-500" onClick = {() => active(list.list.fun1,list.list.index)}>edit</Button>
            {list.list.bool ?<Button className = "border-2 bg-green-500 px-1  hover:border-gray-500" onClick =  {() => dispatch(completed(list.list.index))} > completed </Button> : ""}    
            <Button className = "border-2 bg-red-500 px-1 mx-1 hover:border-gray-500" onClick =  {() => {list.list.fun === "delet" ? dispatch(delet(list.list.index)):dispatch(compdelet(list.list.index))}} > delete </Button> 
            
        </ul> 
        </>   
    )
};