import React, { useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Study Javascript',
      checked: true,
    },
    {
      id: 2,
      text: 'Study React',
      checked: false,
    },
    {
      id: 3,
      text: 'Study Typescript',
      checked: false,
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInput />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
