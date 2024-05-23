import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeContextProvider, MenuContextProvider } from "./context/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <MenuContextProvider>
      <App />
    </MenuContextProvider>
  </ThemeContextProvider>,
);
