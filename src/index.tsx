import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import axios from "axios";

import App from "./components/app/App";
import { store } from "./store/store";

const initializeApp = async () => {
  const response = await axios.get(
    "https://aviasales-test-api.kata.academy/search"
  );
  const { searchId } = response.data;
  store.dispatch({ type: "SET_SEARCH_ID", payload: searchId });
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );

  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
};

initializeApp();
