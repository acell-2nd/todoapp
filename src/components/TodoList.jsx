import React from "react";
import TodoItem from "./TodoItem";
function TodoList(props) {
  const { todos } = props;
  return (
    <div className="flex flex-col gap-4 w-full px-4 py-2 items-center">
      <h2 className="font-bold text-3xl text-accent">My Tasks</h2>
      {todos.length === 0 && <p className="text-accent">No tasks available</p>}
      {todos.map((todo, index) => (
        <TodoItem key={index} title={todo.title} date={todo.date} isCompleted={todo.isCompleted} onToggleCompleted={props.onToggleCompleted} id={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;