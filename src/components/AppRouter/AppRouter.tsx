import { Route, Routes } from "react-router-dom";
import { ROUTES } from "src/utils/constants/routes";
import MainPage from "src/pages/MainPage";
import { useSuspense } from "src/utils/hooks/useSuspense";
import { lazy } from "react";

const FirstPage = lazy(() => import("src/pages/FirstPage"));
const SecondPage = lazy(() => import("src/pages/SecondPage"));

const AppRouter = () => {
    const {
        main,
        first,
        second
    } = ROUTES;
    return (
        <Routes>
            <Route path={main} element={<MainPage />}>
                <Route path={first} element={useSuspense(<FirstPage />)} />
                <Route path={second} element={useSuspense(<SecondPage />)} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
