import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import classes from './Form.module.css';

function Form({ input, setInput, todos, setTodos, editTodo, setEditTodo }) {

    // use states for checking input
    const [inputValidCheck, setInputValidCheck] = useState(true);

    function updateTodo(title, id, completed){
        const newTodo = todos.map((todo) => 
            todo.id === id ? {title, id, completed} : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    };

    useEffect(() => {
        if(editTodo){
            setInput(editTodo.title);
        } else{
            setInput("");
        }
    }, [setInput, editTodo]);

    function userInputHandler(event) {
        setInput(event.target.value);
    };

    function submitToDoFormHandler(event) {
        event.preventDefault();
        if(!editTodo){
            const inputValidCheck = input.length > 0 && input.length <= 40;

        setInputValidCheck(inputValidCheck);
        if (!inputValidCheck) {
            return;
        }
        else {
            setTodos([{
                id: uuidv4(),
                title: input,
                completed: false,
                dateAdded: new Date()
            }, ...todos]);
        };

        // empty text box
        setInput("");
        }
        else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
        
    };

    return (
        <div>
            <form onSubmit={submitToDoFormHandler}>
                <input
                    type="text"
                    placeholder="Enter new to do item..."
                    value={input} required
                    onChange={userInputHandler}
                    className={!inputValidCheck
                        ? `${classes.input} ${classes.invalid}`
                        : classes.input}
                ></input>

                <button className="add-button" type="submit">
                    {editTodo ? "Save" : "Add"}
                </button>
                <button className="cancel-button" type="submit">
                    {!editTodo ? "" : "Cancel"} 
                </button>
            </form>
        </div>
    );
}

export default Form;