import * as React from 'react';
import { v4 as uuidV4 } from 'uuid';

export default function Form({
  input,
  setInput,
  todos,
  setTodos,
  showError,
  setShowError,
}) {
  const onInputChange = (e) => {
    setShowError(false)
    setInput(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (input == '') {
      setShowError(true);
    } else {
      
      setTodos([...todos, { id: uuidV4(), task: input, completed: false }]);
      setInput('');
    }
  };
  return (
    <div className="form">
      <input
        className="input"
        type="text"
        placeholder="Enter Task.."
        value={input}
        onChange={onInputChange}
      />
      <h1>{showError?"Error":''}</h1>
      <button className="addTaskbtn" onClick={onFormSubmit}>
        <b>Add Task</b>
      </button>
    </div>
  );
}
