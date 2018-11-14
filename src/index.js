import React from "react";
import ReactDOM from "react-dom";
// react is in separate libraries- react dom as this is web app
import "./index.css";
import App from "./app/layout/App";
import * as serviceWorker from "./serviceWorker";

const rootEl = document.getElementById("root");

let render = () => {
  ReactDOM.render(<App />, rootEl);
};

if (module.hot) {
  module.hot.accept("./app/layout/App", () => {
    setTimeout(render);
  });
}

render();

serviceWorker.unregister();

// responsible for rendering and loads app component into root id, app replacing the contents of what is inside html
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
