import { Route, Routes } from "react-router-dom";
import { ROUTES } from "src/utils/constants/routes";
import MainPage from "src/pages/MainPage";
import { useSuspense } from "src/utils/hooks/useSuspense";
import { lazy } from "react";

const AboutPage = lazy(() => import("src/pages/AboutPage"));
const CounterPage = lazy(() => import("src/pages/CounterPage"));
const ListPage = lazy(() => import("src/pages/ListPage"));

const AppRouter = () => {
    const {
        main,
        about,
        list
    } = ROUTES;
    return (
        <Routes>
            <Route path={main} element={<MainPage />}>
                <Route index element={useSuspense(<CounterPage />)} />
                <Route path={about} element={useSuspense(<AboutPage />)} />
                <Route path={list} element={useSuspense(<ListPage />)} />
            </Route>
        </Routes>
    )
};

export default AppRouter;
