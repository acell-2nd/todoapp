import React from "react";

function TodoItem(props) {
 const {title, date, id, isCompleted, onToggleCompleted} = props;
 return (
   <div className={`flex flex-row gap-4 w-full p-4 border items-center bg-gray-200 rounded-2xl hover:shadow-md shadow-accent ${isCompleted ? 'opacity-70' : ''} `} onClick={()=>onToggleCompleted(id)}> 
     <input className="w-6 h-6 rounded accent-accent" type="checkbox" checked={isCompleted} onChange={()=>{onToggleCompleted(id)}} />
   <div>
     <h3 style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{title}</h3>
     <p style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{date}</p>
   </div>
   </div>
 );
}

export default TodoItem;