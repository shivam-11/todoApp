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
import {useSelector, useDispatch} from "react-redux";
import React ,{ Component } from 'react';



class App extends Component{


  render(){

        const mystate = ["123"];
        return (
          <CacheBuster>
            {({loading, isLatestVersion, refreshCacheAndReload }) => {
              if (loading) return null;
              if (!loading && !isLatestVersion) {
              refreshCacheAndReload();
            }

        return(
          <>          
            <Head/>
            <InputTask/>
            <Button1/>
            <Button2/>
            <Button3/>  
      
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
