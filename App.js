import React from "react";
import Timer from "./components/Timer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store";

const store = createStore(reducer);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  }
}
