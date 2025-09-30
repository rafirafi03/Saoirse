import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { BrowserRouter } from "react-router-dom";
import WatsappIcon from "./components/Watsapp/WatsappIcon.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <WatsappIcon/>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
