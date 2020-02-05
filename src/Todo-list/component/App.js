import React, { Component } from "react";
import PageTemplate from "./PageTemplate";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default class App extends Component {
  state = {
    input: "",
    todos: [
      { id: 0, text: "aa", done: true },
      { id: 1, text: "aa", done: true }
    ]
  };
  id = 1;
  getId = () => {
    return ++this.id;
  };
  handleChange = e => {
    const { value } = e.target;
    this.setState({
      input: value
    });
    console.log(value);
  };
  handleInsert = () => {
    const { todos, input } = this.state;
    const newTodo = {
      text: input,
      done: false,
      id: this.getId()
    };
    this.setState({
      input: "",
      todos: [...todos, newTodo]
    });
    console.log("insert");
    console.log(newTodo);
  };

  handleToggle = id => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const toggled = {
      ...todos[index],
      done: !todos[index].done
    };
    this.setState({
      todos: [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index + 1, todos.length)
      ]
    });
  };
  handleRemove = id => {};
  render() {
    const { input, todos } = this.state;
    const { handleChange, handleInsert, handleToggle, handleRemove } = this;

    return (
      <PageTemplate>
        <TodoInput
          onChange={handleChange}
          value={input}
          onInsert={handleInsert}
          onRemove={handleRemove}
        />
        <TodoList todos={todos} onToggle={handleToggle} />
      </PageTemplate>
    );
  }
}
