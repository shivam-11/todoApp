
const initialState = {
    value: 0,  
    alltask: [],
    activetask:[],
    completedtask:[]

};


const addtask = (state = initialState, action) =>{
    //console.log("hello");
    switch (action.type){
      case "add": return {...state,alltask:[...state.alltask,action.payload],activetask:[...state.alltask,action.payload]};
      case "delete": 
            let a = state.activetask.slice(0,action.payload)
            let b = state.activetask.slice(action.payload+1)
            let c2 = state.alltask.slice(0,action.payload)
            let d2 = state.alltask.slice(action.payload+1)
            return {...state,alltask:c2.concat(d2),activetask:a.concat(b)}
      case "complete":
            let v = state.activetask[action.payload]
            let c = state.activetask.slice(0,action.payload)
            let d = state.activetask.slice(action.payload+1)
            return {...state,activetask:c.concat(d),completedtask:[...state.completedtask,v]}   
      case "compdelete":
            let a1 = state.completedtask.slice(0,action.payload)
            let b1 = state.completedtask.slice(action.payload+1)
            let c1 = state.alltask.slice(0,action.payload)
            let d1 = state.alltask.slice(action.payload+1)
            return {...state,alltask:c1.concat(d1),completedtask:a1.concat(b1)}
      case "editactive":
            state.activetask[action.id] = action.val
            state.alltask[action.id] = action.val
            return {...state}
      case "editcompleted": 
            state.activetask[action.id] = action.val
            state.alltask[action.id] = action.val 
            return {...state}      
      case "bool": return {...state,value:action.payload}
      
      default: return state;
    }

};

export default addtask;




