import React from "react";
import { FaTrashAlt } from "react-icons/fa";
function TodoDelate(props) {
  const {id, onDelateTodo} = props;
  return (
    <div className="">
      <button className="bg-black text-white py-2 px-4 rounded-xl hover:bg-accent active:scale-95 transition" onClick={()=>onDelateTodo(id)}>
        <FaTrashAlt />
      </button>
    </div>
  );
}

export default TodoDelate;