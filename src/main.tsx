import { createRoot } from "react-dom/client";
import Pages from "./pages";

const Container = document.getElementById("react-app");

const Root = createRoot(Container);

Root.render(<Pages />);
