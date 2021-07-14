

export const addtask = (task) =>{
    return { 
        type : "add", 
        payload:task
    }
};

export const boolvalue = (num) =>{
    return { 
        type:"bool",
        payload:num
    }
};

export const completed = (id) =>{
    return { 
        type:"complete",
        payload:id
    }
};

export const compdelet = (id) =>{
    return { 
        type:"compdelete",
        payload:id
    }
};

export const delet= (id) =>{
    return { 
        type:"delete",
        payload:id
    }
};

export const editactive= (id,val) =>{
    return { 
        type:"editactive",
        id:id,
        val:val
    }
};

export const editcompleted= (id,val) =>{
    return { 
        type:"editcompleted",
        id:id,
        val:val
    }
};