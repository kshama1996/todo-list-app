import React from 'react'
import './ToDoStyle.css'
const ToDoItem = ({ item, onDelete, index, onCheckboxClick }) => {
    const onClickDelete = (id) => {
        onDelete(id)
    }
    const onClickCheckBox = (event) => {
        onCheckboxClick(item.id)
    }
    return (

        <div class="to-do-items">  
                <span><label><input type='checkbox' id="check" onChange={onClickCheckBox} /></label></span>
                <span>{index}</span>
                {item.completed}
                <span  className={item.completed == true ? 'item-primary' : 'to-do-item-label'}>{item.task}</span>
                <span><button onClick={() => onClickDelete(item.id)}>Delete</button></span>   
        </div>)
}

export default ToDoItem