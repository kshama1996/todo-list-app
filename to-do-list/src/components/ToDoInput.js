import React, { useState } from "react";

const ToDoInput=(props)=>{
const[inputtext,setInputText]=useState('')
const onChange=(event)=>{
    setInputText(event.target.value)
}
const onAddData=()=>{
const newitem={
    task:inputtext,
    completed:false
}
console.log("props",props)
props.onClickAdd(newitem)
setInputText('')
}

return(
    <div class="to-do-input-container">
    <span class="to-do-input">
    <input style={{width:98+'%'}} type="text"  id ="textid" value={inputtext} onChange={onChange}/>
    </span>
    <span>
       <button onClick= {onAddData}>Add</button>
    </span>
    </div>
)
}
export default ToDoInput