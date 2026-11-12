import React from "react";
import TodoDelate from "./TodoDelate";

function TodoItem(props) {
 const {title, date, id, isCompleted, onToggleCompleted, onDelateTodo} = props;
 return (
   <div className={`flex flex-row gap-4 w-full p-4 border items-center bg-gray-200 rounded-2xl hover:shadow-md shadow-accent ${isCompleted ? 'opacity-70' : ''} `} onClick={()=>onToggleCompleted(id)}> 
     <input className="w-6 h-6 rounded accent-accent" type="checkbox" checked={isCompleted} onChange={()=>{onToggleCompleted(id)}} onClick={(e)=> e.stopPropagation()} />
   <div>
     <h3 className="font-bold text-lg" style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{title}</h3>
     <p style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{date}</p>
   </div>
   <div className="ml-auto" onClick={(e)=> e.stopPropagation()} >
    <TodoDelate id={id} onDelateTodo={onDelateTodo} />
   </div>
   </div>
 );
}

export default TodoItem;