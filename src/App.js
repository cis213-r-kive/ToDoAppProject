import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

//component imports
import Header from './components/Header';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [input, setInput] = useState("");

  //current list of To Dos
  const INITIAL_TODO = [
    { id: uuidv4(), title: 'Read a book', completed: false, dateAdded: new Date() },
    { id: uuidv4(), title: 'Cook food', completed: false, dateAdded: new Date() },
    { id: uuidv4(), title: 'Finish code', completed: false, dateAdded: new Date() }
  ]

  const [todos, setTodos] = useState(INITIAL_TODO);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="form-container">
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
      <div className="list-container">
        <ToDoList
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
}

export default App;
     