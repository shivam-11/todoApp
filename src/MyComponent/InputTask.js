import React from 'react';
import { useState } from 'react';
import '../App.css';
import {useDispatch} from "react-redux";
import {addtask} from "../actions/index";
import { Form, Input} from "antd";


export const InputTask= (props) =>{

    const [InputList, setInputList] = useState("");
    const dispatch = useDispatch();

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const keyevent=(event)=> {
        if (event.code === "Enter") {
          event.preventDefault();
          dispatch(addtask(InputList))
          
        }
      }
    

    return (
        <Form>
           <Input type = "Text" className = " border-2 border-green-500 py-1 px-3 text-grey-darkest" onKeyDown = {(e) => keyevent(e)} onChange = {itemEvent}   ></Input>
           <Input type = "button" className ="border-2 bg-green-400 py-1 px-3 mx-2 hover:border-gray-500 "value="add" onClick = {() => dispatch(addtask(InputList))} ></Input>
        </Form>
    )
    
};