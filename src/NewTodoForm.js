import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handSumbit = this.handSumbit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handSumbit(evt) {
    evt.preventDefault();
    this.props.createTodo({ ...this.state, id: uuidv4(), completed: false });
    this.setState({ task: "" });
  }

  render() {
    return (
      <form onSubmit={this.handSumbit}>
        <label htmlFor='task'>New Todo</label>
        <input
          type='text'
          placeholder='New Todo'
          id='task'
          name='task'
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
