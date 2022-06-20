import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Coban",
      animal: "Dog",
      breed: "Kangal",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Incir",
      animal: "Cat",
      breed: "British ShortHair",
    })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
