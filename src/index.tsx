import ReactDOM from "react-dom/client";
import App from "./app";
import { StoresProvider } from "stores";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StoresProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoresProvider>
);
