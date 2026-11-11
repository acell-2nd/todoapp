import React from "react";
import Header from "./TodoHeader";
import InputTodo from "./TodoInput";
import TodoList from "./TodoList";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      todos : []
    }
    
  }

  onAddTodo = (props) => {
    const newTodo = { ...props , isCompleted: false , id: +new Date() };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  }

  onToggleCompleted = (id, event) => {

    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    }));
  }

  render() {
    return (
      <div className='flex flex-col items-center w-1/2 h-fit p-4 bg-secondary rounded-2xl shadow-2xl shadow-accent mt-8'>
        <Header></Header>
        <InputTodo addTodoProps={this.onAddTodo} />
        <TodoList todos={this.state.todos} onToggleCompleted={this.onToggleCompleted} />
      </div>
    );
  }
}
export default Card;