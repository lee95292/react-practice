import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function ActionLink(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log("The Link was clicked");

    axios
      .get(
        "http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-18&sortBy=publishedAt&apiKey=99ef42fc4cf0491c928597b08fd47354"
      )
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <a href="#" onClick={handleClick}>
      click link
    </a>
  );
}

ReactDOM.render(<ActionLink />, document.getElementById("root"));

export default ActionLink;
