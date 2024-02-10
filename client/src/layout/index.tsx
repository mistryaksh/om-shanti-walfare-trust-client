import React, { FC } from "react";

import { LayoutProps } from '../interface';
import { Header } from './header';
import { Footer } from './footer';

export const Layout: FC<LayoutProps> = ({ children }) => {
    const Main: FC = () => children as JSX.Element;

    return (
        <section>
            <Header />
            <Main />
            <Footer />
        </section>
    );
}