import React, { useReducer, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const INIT_NUM_OF_TODO = 2500;

const createBulkTodos = () => {
  const todos = [];

  for (let i = 1; i <= INIT_NUM_OF_TODO; i++) {
    todos.push({
      id: i,
      text: `Todo ${i}`,
      checked: false,
    });
  }

  return todos;
};

const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);

    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);

    case 'TOGGLE':
      return todos.map((todo) => (todo.id === action.id ? { ...todo, checked: !todo.checked } : todo));

    default:
      return todos;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(INIT_NUM_OF_TODO + 1);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };

    dispatch({ type: 'INSERT', todo });
    nextId.current++;
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInput onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
