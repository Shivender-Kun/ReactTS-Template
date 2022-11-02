import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import "./styles/index.scss";
import App from "./pages";

const Container = document.getElementById("react-app");
const Root = createRoot(Container as HTMLElement);

Root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
