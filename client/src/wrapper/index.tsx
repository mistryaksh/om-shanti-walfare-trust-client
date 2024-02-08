import React, { FC, ReactNode } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export interface WrapperProps {
    children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
    return (
        <>
            <ToastContainer autoClose={3000} />
            {children}
        </>
    );
};
