import React from "react";
import ReactDOM from "react-dom";
import MainPanel from "./Containers/MainPanel";

// redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import { BrowserRouter } from "react-router-dom";

import "./styles.css";

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <MainPanel />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
