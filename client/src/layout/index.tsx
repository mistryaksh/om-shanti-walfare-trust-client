import React, { FC, ReactNode } from "react";

import { Header } from './header';
import { Footer } from './footer';

interface LayoutProps {
    children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    );
}