import * as React from 'react';

export default function TodoList({ todos, setTodos }) {
  const handleDelete = ({ task, id }) => {
    alert("Do you want to delete?")
    console.log(task, id);
    let rem = todos.filter((todo) => {
      
     return todo.id !== id;
    });
   
    setTodos(
      rem
    );
  };
  const handleComplete=(todo)=>{
    let completedArray = todos.map((item)=>{
          if(todo.id==item.id){
            return {...item,completed:!item.completed}
          }
          else{
            return{...item}
          }
    })
    setTodos(completedArray)

  }
  const handleClearTask=()=>{
    let filteredArray =todos.filter((item)=>{
        return item.completed == false
    })
    setTodos(filteredArray)
  }
  return (
    <div className="todosDiv">
      {todos.map((todo) => {
        return (
          <li key={todo.id} className="todoList" style={{textDecoration:todo.completed?'line-through':''}}>
            {todo.task}
            <div className="btnList">
              <button className="completeBtn" onClick={()=>handleComplete(todo)}>
                <b>+</b>
              </button>
              <button className="completeBtn">
                <b>!</b>
              </button>
              <button
                className="completeBtn"
                onClick={() => handleDelete(todo)}
              >
                <b>-</b>
              </button>
            </div>
          </li>
        );
      })}
      <div className="child">
      <button onClick={handleClearTask}>Clear completed Task</button>
      </div>
    </div>
  );
}
