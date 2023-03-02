import * as React from 'react';
import Form from './src/components/Form';
import Header from './src/components/Header';
import './style.css';
import { useState } from 'react';
import TodoList from './src/components/TodoList';

export default function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [showError, setShowError] = useState(false);
  return (
    <div className="container">
      <Header />
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        showError={showError}
        setShowError={setShowError}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
