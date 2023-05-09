import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import classes from './Form.module.css';

function Form({ input, setInput, todos, setTodos }) {

    // use states for checking input
    const [inputValidCheck, setInputValidCheck] = useState(true);

    function userInputHandler(event) {
        setInput(event.target.value);
    };

    function submitToDoFormHandler(event) {
        event.preventDefault();

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

                <button className="add-button" type="submit">ADD</button>
            </form>
        </div>
    );
}

export default Form;