import React from "react";

function TodoItem(props) {
 const {title, date} = props;
 return (
   <div>
     <h3>{title}</h3>
     <p>{date}</p>
   </div>
 );
}

export default TodoItem;