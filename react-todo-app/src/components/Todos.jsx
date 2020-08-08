import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todos extends Component {
  state = {};
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onToggle={this.props.onToggle}
        onDelete={this.props.onDelete}
      />
    ));
  }
}

export default Todos;
