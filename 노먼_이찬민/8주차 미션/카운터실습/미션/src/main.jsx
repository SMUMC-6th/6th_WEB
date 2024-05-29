import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./state/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 중앙저장소 store를 provider에 연결하기 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
