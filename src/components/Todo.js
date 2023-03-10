import React from 'react';

const Todo = ({text, todos, todo, setTodos}) => {
    // events
    const deleteHandler = () => {
        setTodos(todos.filter( (el) => el.id !== todo.id))
    }


    const completeHandler = () => {
        setTodos(todos.map(ele => {
            if(ele.id === todo.id) {
                return{
                    ...ele, 
                    completed: !ele.completed,
                }
            }
            return ele;
        }))
    }



    return (
        <div className = "todo">
                <li className = {`todo-item ${ todo.completed ? "completed" : "" }`}>
                    {text}
                </li>
                <button onClick = {completeHandler} className = "complete-btn">
                    <i className = "fas fa-check"></i>
                </button>
                <button onClick = {deleteHandler} className = "trash-btn">
                    <i className = "fas fa-trash"></i>
                </button>
        </div>

    );
}

export default Todo;