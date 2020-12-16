import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const createBulkTodos = (numOfTodo) => {
  const todos = [];

  for (let i = 0; i < numOfTodo; i++) {
    todos.push({
      id: i,
      text: `Todo ${i}`,
      checked: false,
    });
  }

  return todos;
};

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos(2500));

  const nextId = useRef(4);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };

    setTodos((todos) => todos.concat(todo));
    nextId.current++;
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
  }, []);

  return (
    <TodoTemplate>
      <TodoInput onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
