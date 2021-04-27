import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import React, { useState } from 'react';


function App() {
  
  const onDelete = (todo)=>{
    console.log("I am ondelete", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e)=>{
      return e !== todo;
    }));
  }

  const addTodo = (title, desc)=>{
      console.log(title, desc);
      let sno;
      if(todos.length ==0){
        sno =1;
      }
      else{
      sno = todos[todos.length -1].sno +1;
      }
      const myTodo = {
        sno: sno,
        title: title,
        desc:desc,
      }
      setTodos([...todos, myTodo]);
      console.log(myTodo);
  }

// setTodos -- function for update Todo 
  const [todos, setTodos] = useState([]);
  return (
    <>
  <Header title= "My Todos" searchBar = {false} />
  <AddTodo addTodo = {addTodo}/>
  <Todos todos = {todos} onDelete = {onDelete}/>
  <Footer/>
  </>
  );
}

export default App;
