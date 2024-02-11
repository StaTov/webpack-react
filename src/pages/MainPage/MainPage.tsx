import { Outlet } from "react-router-dom";
import Nav from "src/components/Nav";

const Main = () => {
    return (
        <div data-testid="main-page" className="container">
            <Nav />
            <Outlet />
        </div>
    )
};

export default Main;
