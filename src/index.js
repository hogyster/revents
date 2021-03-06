import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";
// react is in separate libraries- react dom as this is web app
import "./index.css";
import App from "./app/layout/App";
import * as serviceWorker from "./serviceWorker";
import { configureStore } from "./app/store/configureStore";
//brring in configureStore method
import ScrollToTop from "./app/common/util/ScrollToTop";

const store = configureStore();

const rootEl = document.getElementById("root");
// pass store as property to provider
let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </Provider>,

    rootEl
  );
};
// childrenn of scroll to top is anything inside the element, this case is App the children is the App, so returning the App itself, the children of app will all fall into it.
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
