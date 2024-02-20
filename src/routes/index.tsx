import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { ROUTES } from "../core/enums";
import { Home, About, Programs, Events, Blogs, Contact } from "../pages";

export const AppRoute = () => {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path={ROUTES.HOME} element={<Home />} />
                    <Route path={ROUTES.ABOUT} element={<About />} />
                    <Route path={ROUTES.PROGRAMS} element={<Programs />} />
                    <Route path={ROUTES.EVENTS} element={<Events />} />
                    <Route path={ROUTES.BLOGS} element={<Blogs />} />
                    <Route path={ROUTES.CONTACT} element={<Contact />} />
                    <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
               </Routes>
          </BrowserRouter>
     );
};
