import React from "react";

class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: "",
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }

  handleChangeTitle = (e) =>{   
    return this.setState({title: e.target.value});
  }
  handleChangeDate = (e) =>{
    return this.setState({date: e.target.value});
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim() === "" || this.state.date.trim() === "") {
      alert("Please enter a task and date");
    } else {
        this.props.addTodoProps(this.state);
    }
    this.setState({ title: "", date: "" });
}

  render() {
    return (
      <div className="w-full ">
        <form onSubmit={this.onSubmit} className="flex flex-col w-full gap-4 px-4" >
        <input
          type="text"
        id="title"
          placeholder="Enter your task here . . ."
            value={this.state.title}
            onChange={this.handleChangeTitle}
            className="border bg-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent placeholder:text-accent"
        />
        <input
          type="date"
          id="date"
          value={this.state.date}
          onChange={this.handleChangeDate}
          onClick={(e) => e.target.showPicker()}
          className={`border bg-gray-200 border-black rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent [&::-webkit-calendar-picker-indicator]:opacity-15 [&::-webkit-calendar-picker-indicator]:cursor-pointer hover:[&::-webkit-calendar-picker-indicator]:opacity-100 ${this.state.date ? 'text-black' : 'text-accent'}`}
        />
        <button className="btn__Submit" type="submit">Add</button>
        </form>
      </div>
    );
  }
            
}
export default InputTodo;