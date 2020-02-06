import React from "react";
import styles from "./styles/main.css";
import App from "./component/App";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
export default class TodoList extends React.Component {
  render() {
    return (
      <div className={cx("todo-list")}>
        <App />
      </div>
    );
  }
}
