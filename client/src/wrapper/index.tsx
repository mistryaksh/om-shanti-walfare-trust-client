import React, { FC, ReactNode } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export interface WrapperProps {
    children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
    return (
        <div className="animate__animated animate__fadeIn">
            <ToastContainer autoClose={3000} />
            {children}
        </div>
    );
};
