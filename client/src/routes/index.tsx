import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ROUTES } from "../core/enums";
import { Home } from "../pages";

export const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};
