import React from "react";
import TodoItem from "./TodoItem";
function TodoList(props) {
  const { todos } = props;
  return (
    <div className="main__TodoList">
      <h2>My Tasks</h2>
      {todos.map((todo, index) => (
        <TodoItem key={index} title={todo.title} date={todo.date} isCompleted={todo.isCompleted} onToggleCompleted={props.onToggleCompleted} id={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;