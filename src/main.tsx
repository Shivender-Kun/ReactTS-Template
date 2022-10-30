import { createRoot } from "react-dom/client";
import Pages from "./pages/index";
import "./styles/index.scss";

const Container = document.getElementById("react-app");

const Root = createRoot(Container as HTMLElement);

Root.render(<Pages />);
