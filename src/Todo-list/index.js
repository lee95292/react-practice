import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import App from "./component/App";

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        <App></App>
      </div>
    );
  }
}
