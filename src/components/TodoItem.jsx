import React from "react";

function TodoItem(props) {
 const {title, date, id, isCompleted, onToggleCompleted} = props;
 return (
   <div className="main__TodoItem"> 
     <h3 style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{title}</h3>
     <p style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{date}</p>
     <input type="checkbox" checked={isCompleted} onChange={()=>{onToggleCompleted(id)}} />
   </div>
 );
}

export default TodoItem;