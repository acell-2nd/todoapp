import React from "react";
import TodoItem from "./TodoItem";
function TodoList(props) {
  const { todos } = props;
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={index} title={todo.title} date={todo.date} />
      ))}
    </div>
  );
}

export default TodoList;