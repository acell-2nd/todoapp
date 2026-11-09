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

  onAddTodo = (title, date) => {
    const newTodo = { title, date };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  }
  render() {
    return (
      <div className="main__Card">
        <Header></Header>
        <InputTodo addTodoProps={this.onAddTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
export default Card;