import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CacheBuster from './CacheBuster';
import {Head} from "./MyComponent/Heading";
import {InputTask} from "./MyComponent/InputTask";
import {Button1} from "./MyComponent/Button1";
import {Button2} from "./MyComponent/Button2";
import {Button3} from "./MyComponent/Button3";  
import {TaskHead} from "./MyComponent/TaskHead";
import {Task} from "./MyComponent/Task";
import Modal from 'react-modal';
import {Button} from "antd";
import {useSelector, useDispatch} from "react-redux";
import React ,{ Component } from 'react';
import { modalGlobalConfig } from 'antd/lib/modal/confirm';



class App extends Component{


  render(){

        const mystate = ["123"];
        return (
          <CacheBuster>
            {({loading, isLatestVersion, refreshCacheAndReload }) => {
              if (loading) return null;

        return(
          <>          
            <Head/>
            <InputTask/>
            <Button1/>
            <Button2/>
            <Button3/> 
            <Modal className = "relative p-8 bg-gray-100 border-gray-200 max-w-md m-auto flex-col " isOpen = {true} >         
              <h1 className = "text-3xl font-bold">Refresh Page</h1>

              <h3 className = "text-1xl text-gray-500 ">You Should refresh the page Otherwise it may cause issue ?? After refresh you can continue your work!!</h3>
              <div>
                <Button className = "border-2 bg-blue-400 py-1 px-5 mx-20 align-left hover:border-gray-500" onClick = {refreshCacheAndReload}>Refresh</Button>
              </div>  
            </Modal> 
                 
            <div >
      
            {mystate.value === 0 && <TaskHead TH = {{ length: mystate.activetask.length, desc:"Active Task"}}/>}
            {mystate.value === 1 && <TaskHead TH = {{ length: mystate.alltask.length, desc:"All Task"}}/>}
            {mystate.value === 2 && <TaskHead TH = {{ length: mystate.completedtask.length, desc:"Completed Task"}}/>}
            
            {mystate.value === 0 && mystate.activetask.map((itemval,index) => {
              return <><Task list = {{index:index,val:itemval,fun:"delet", fun1 : "active",bool:true}}/></>
            })}

            {mystate.value === 1 && mystate.alltask.map((itemval,index) => {
              return <><Task list = {{index:index,val:itemval,fun:"delet",fun1: "active",bool:false}}/></>
            })}

            {mystate.value === 2 && mystate.completedtask.map((itemval,index) => {
              return <><Task list = {{index:index,val:itemval,fun:"compdelet",fun1: "completed",bool:false}}/></>
            })}
     
            </div>
          </>
        );

      }
    }
    </CacheBuster>    
  );
}
}

export default App;
