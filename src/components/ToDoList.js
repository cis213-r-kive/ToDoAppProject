import React from 'react';
import { useState } from 'react';
import classes from './ToDoList.module.css';

function ToDoList( { todos, setTodos, setEditTodo } ) {
    console.log(todos);

    const [searchFilter, setSearchFilter] = useState("");

    function deleteHandler({id}){
        setTodos(todos.filter((todo) => todo.id !== id));
    };


    function onCompleteHandler(todo){
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id){
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        );
    };

    function editHandler({id}){
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };

    function searchFilterHandler(event) {
        setSearchFilter(event.target.value);
    };



    return (
        <div className="display-container">
            <form className="filter-form">
                    <input 
                    type="text" 
                    placeholder="Search Item..." 
                    className="filter-input"
                    onChange={searchFilterHandler}
                    ></input>
            </form>
            <div className="todo-items">
            {todos.filter((todo) => {
                return searchFilter.toLowerCase() === '' ? todo : todo.title.toLowerCase().includes(searchFilter)
            }).map((item) => (
                <ul>
                    <li className="list-item" key={item.id}>
                    <input
                        type="text"
                        value={item.title}
                        className={item.completed === true
                            ? `${classes.checked}`
                            : classes.input}
                        onChange={(event) => event.preventDefault()}
                    />
                    <input
                        type="checkbox"
                        className="item-check"
                        onChange={() => onCompleteHandler(item)}
                    ></input>
                    <button 
                    className="delete-button"
                    onClick={() => deleteHandler(item)}
                    >DELETE</button>

                    <button 
                    className="edit-button"
                    onClick={() => editHandler(item)}
                    >EDIT</button>
                </li>
                </ul>
                
            ))}
            </div>
        </div>
    );
}

export default ToDoList;