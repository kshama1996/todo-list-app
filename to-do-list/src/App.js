import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import ToDoList from './components/ToDoList';
// import  data from './tododata.json';

function App() {
  const [todo,setToDo]=useState([]);
  useEffect( ()=>{
    fetch("./tododata.json")
    .then(response => response.json())
    .then(res =>setToDo(res))
    
  },[])
 const setNewListData =(newitem)=>{
  setToDo(todo =>[...todo,newitem])
 }
 const DeleteData =(id) =>{
setToDo(todo.filter(item=>id!=item.id))
 }
 const onUpdateListData=(id)=>{
  todo.map(x=>{
    if(x.id==id){
      x.completed=!x.completed
    }
  })
  setToDo([...todo])
 }
  return (  
    <div>
      <ToDoList listdata={todo} setNewListData={setNewListData} DeleteData={DeleteData} onUpdateListData={onUpdateListData}/>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
