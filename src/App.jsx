import React, { useState } from 'react';
// Components
import FormInput from './components/FormInput/FormInput.jsx';
import TodoList from './components/TodoList/TodoList';
// Styles
import './App.css';

function App() {
  const [todoList, setTodoList] = useState(['Buy veggies']);

  const addItem = item => setTodoList([item, ...todoList]);

  const deleteItem = item => {
    const newTodos = todoList.filter((_, index) => index !== item);

    setTodoList(newTodos);
  }

  return (
    <div className="App">
      <header className='header'>
        <h1 className='header__text'>
          A very simple To-do list with react
        </h1>
      </header>
      <secion className='content'>
        <FormInput addItem={addItem}/>
        <TodoList 
          todos={todoList}
          deleteItem={deleteItem} />
      </secion>
    </div>
  )
}

export default App;
