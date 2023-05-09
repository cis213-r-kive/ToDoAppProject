import React from 'react';

function ToDoList( { todos, setTodos } ) {
    console.log(todos);

    function deleteHandler({id}){
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    function onCompleteHandler(todo){
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id){
                    return {...item, completed: true}
                }
                return item;
            })
        )
    }

    return (
        <div>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input
                        type="text"
                        value={todo.title}
                        className="list"
                        onChange={(event) => event.preventDefault()}
                    />
                    <input
                        type="checkbox"
                        onChange={() => onCompleteHandler(todo)}
                    ></input>
                    <button 
                    className="delete-button"
                    onClick={() => deleteHandler(todo)}
                    >DELETE</button>

                    <button 
                    className="edit-button"
                    >EDIT</button>
                </li>
            ))}
        </div>
    );
}

export default ToDoList;