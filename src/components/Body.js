import React, { useState } from 'react';

function TodoApp() {
  const [todolist, setTodolist] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodolist([...todolist, { id: Date.now(), text: newTodo, isComplete: false }]);
      setNewTodo(''); // Clear the input field after adding
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTodo(); // Call addTodo when Enter is pressed
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown} // Listen for key presses
        placeholder="Enter a new todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todolist.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
