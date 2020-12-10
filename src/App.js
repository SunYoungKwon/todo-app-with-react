import React from 'react';
import TodoInput from './components/TodoInput';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInput />
    </TodoTemplate>
  );
};

export default App;
