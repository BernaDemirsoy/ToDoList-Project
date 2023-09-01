import './App.css';
import React, {useState,useEffect} from 'react';
//importing Components
import Form from './components/Form'
import ToDoList from './components/ToDoList';

function App() {
  
  //State
  const[inputText,setInputText]=useState("");
  const[todos,setTodos]=useState([]);
  const[status,setStatus]=useState("all"); //all is a default value for 
  const[filteredTodos,setFilteredTodos]=useState([]);


  //Functions
  const filterHandler=()=>{
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo=>todo.completed===true));
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo=>todo.completed===false));
          break;
          
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  //Save to local
  const saveLocalTodos=()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  };
   //Use effect
   useEffect(()=>{
    filterHandler();
    saveLocalTodos();
   },[todos,status]);

  const getLocalTodos=()=>{
    if(localStorage.getItem("todos")===null){
      localStorage.setItem('todos',JSON.stringify([]));
    }
    else{
      let todoLocal=JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
    
 }
   //Run one when the app start
   useEffect(()=>{
    getLocalTodos();
  },[]);
   
  return (
    <div className="App">
      <header>
        <h1>Berna's ToDo List</h1>
      </header>

      <Form 
        inputText={inputText} 
        todos= {todos} 
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
       
       />

      <ToDoList 
      setTodos={setTodos} 
      todos={todos}
      filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
