import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: "",
  };

  onCreate = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        className={"w-50 mx-auto"}
        style={{ display: "flex" }}
      >
        <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          style={{ flex: 10, border: "none" }}
          value={this.state.title}
          onChange={this.onCreate}
        />
        <input
          type="submit"
          value="submit"
          className="btn btn-secondary btn-sm float-right"
        />
      </form>
    );
  }
}

export default AddTodo;
