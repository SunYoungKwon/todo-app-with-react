import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInput.scss';

const TodoInput = ({ onAddTodo }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      if (value) {
        onAddTodo(value);
        setValue('');
      } else {
        alert('할 일을 입력해주세요!');
      }

      e.preventDefault(); // submit 이벤트의 새로고침 방지
    },
    [onAddTodo, value],
  );

  return (
    <form className="TodoInput" onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInput;
