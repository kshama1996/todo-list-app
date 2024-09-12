import React from "react";
import ToDoInput from "./ToDoInput";
import ToDoItem from "./ToDoItem";
import './ToDoStyle.css'
const ToDoList = ({ listdata, setNewListData, DeleteData, onUpdateListData }) => {
  console.log("listdata--", listdata)


  const onAdd = (item) => {
    item.id = idGenerator();
    setNewListData(item)
  }

  const onDelete = (id) => {
    console.log("delete id", id)
    DeleteData(id)
  }
  const idGenerator = () => {
    return Math.random()
      .toString(36)
      .slice(2, 6);
  }
  const onCheckboxClick = (id) => {
    onUpdateListData(id)
  }
  return (
    <div className="to-do-box">
      <h2>To do List</h2>
      <div>
        <ToDoInput onClickAdd={onAdd} />
      </div>
      <div>{listdata.map((item, index) =>
        <ToDoItem index={index + 1} item={item} key={item.id} onDelete={onDelete} onCheckboxClick={onCheckboxClick} />
        // <div key={item.id}>
        //   {/* <ToDoItem /> */}
        //     <span>{item.task}</span>
        //     <span>{item.id}</span>
        //     </div>
      )}
      </div>
    </div>
  )

}

export default ToDoList