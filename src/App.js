import React, { useState, useEffect } from 'react';
import './App.css';
// Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  // States here
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);



  // run once when the app starts
  useEffect(() => {
    // console.log("hey");
    getLocalTodos();
  }, [])

  // Effect
  useEffect(() => {
    // console.log("hey");
    filterHandler(); 
    saveLocalTodos();
    
  }, [todos, status]);



  // functions and events

  const filterHandler = () => {
    switch (status){
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }; 



  //Local storage
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));  
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      // console.log(todoLocal);
      setTodos(todoLocal)
      
      // setTodos(JSON.parse(localStorage.getItem("todos"))); 
    }
  }





  return (
    <div className = "App">
      <header>
      <h1>
        Daily Tasks
      </h1>
      
      
      </header>
      
      <Form 
      todos = { todos } 
      setTodos = { setTodos } 
      setInputText = { setInputText }
      inputText = { inputText}
      setStatus = { setStatus }
      /> 
      <TodoList 
      filteredTodos={ filteredTodos }
      todos = { todos }
      setTodos = { setTodos }
      /> 
    </div>    
  );
}

export default App;


