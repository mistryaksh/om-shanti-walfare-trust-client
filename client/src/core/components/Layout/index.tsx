import React, { FC } from "react";

import { Header } from './Header';
import { Footer } from './Footer';

type LayoutProps = {
   children: JSX.Element | JSX.Element[];
};

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