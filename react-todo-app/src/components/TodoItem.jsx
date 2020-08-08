import React, { Component } from "react";

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: 10,
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()} className={"w-50 mx-auto"}>
        <h6>
          <input type="checkbox" onChange={() => this.props.onToggle(id)} />{" "}
          {title}{" "}
          <button
            className={"btn btn-danger btn-sm float-right"}
            onClick={() => this.props.onDelete(id)}
          >
            X
          </button>
        </h6>
      </div>
    );
  }
}

export default TodoItem;
