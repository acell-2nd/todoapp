import React from "react";

class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      Date: "",
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }

  handleChangeTitle = (e) =>{   
    return this.setState({title: e.target.value});
  }
  handleChangeDate = (e) =>{
    return this.setState({Date: e.target.value});
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim() === "" || this.state.Date.trim() === "") {
      alert("Please enter a task and date");
    } else {
        this.props.addTodoProps(this.state.title, this.state.Date);
    }
}

  render() {
    return (
      <div className="main__InputTodo">
        <form onSubmit={this.onSubmit} className="form__Todo">
        <label htmlFor="title">Task:</label>
        <input
          type="text"
        id="title"
          placeholder="Enter your task"
            value={this.state.title}
            onChange={this.handleChangeTitle}
        />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={this.state.Date}
          onChange={this.handleChangeDate}
        />
        <button type="submit">Add</button>
        </form>
      </div>
    );
  }
            
}
export default InputTodo;