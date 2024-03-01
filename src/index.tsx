import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { setupStore } from "./store";
import AppRouter from "./components/AppRouter";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const store = setupStore();
const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </Provider>
);