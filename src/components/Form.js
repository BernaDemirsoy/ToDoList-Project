import React from 'react';
//import uuid v4
import { v4 as uuid } from 'uuid';

const Form=({setInputText, todos, setTodos, inputText,setStatus})=>{

    
    const inputTextHandler=(e)=>{
        
        setInputText(e.target.value);
    };
    const submitTodoHandler=(e)=>{
        //This func do not allow refreshing the page again and again
        e.preventDefault();
        setTodos([
            ...todos,
            {text:inputText,completed:false,id:uuid()}
        ]);
        setInputText("");
    };

    const statusHandler=(e)=>{
        setStatus(e.target.value);
    };
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type='text' className="todo-input"/>
            
            <button onClick={submitTodoHandler} className="todo-button" type='submit'>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name='todos' className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;