import React, { Component } from "react";
import TodoItem from "../TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoItem done> test1</TodoItem>
        <TodoItem> Use CSS variable in CRA</TodoItem>
      </div>
    );
  }
}
