import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Note: <StrictMode> is intentionally not used. The scroll/3D effects mutate the DOM,
// and StrictMode's double-invoked effects would run them twice in development.
createRoot(document.getElementById("root")).render(<App />);
