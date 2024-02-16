import React, { FC } from "react";
import { Link } from "react-router-dom";

import { IHeaderLink } from "../../../../interface";
import { COMMON, LAYOUT_STYLES } from "../../../../constants";
import { ROUTES } from "../../../../enums";

import { Button } from "../../../index";

const STYLES = LAYOUT_STYLES;

export const HeaderBottom: FC = () => {
   const links: IHeaderLink[] = [
      {
         name: "Home",
         to: ROUTES.HOME
      },
      {
         name: "About",
         to: ROUTES.ABOUT,
      },
      {
         name: "Programs",
         to: ROUTES.PROGRAMS
      },
      {
         name: "Events",
         to: ROUTES.EVENTS
      },
      {
         name: "Blogs",
         to: ROUTES.BLOGS
      },
      {
         name: "Contact",
         to: ROUTES.CONTACT
      },
   ];

   return (
      <header className="sticky top-0">
      <div className="bg-white py-2.5 w-full smooth-shadow ">
         <div className="container mx-auto w-full pl-8 pr-10">
            <div className="flex items-center justify-between max-w-full">
            <div>
               <img src={COMMON.LOGO} alt="Logo" className="py-1 w-24" />
            </div>
            <div className="flex items-center gap-x-12">
               <ul className="flex items-center gap-x-12">
                  {links.map((link, index) => (
                     <li
                        key={index}
                        className={
                           STYLES.LINK +
                           (window.location.pathname === link.to
                           ? " text-emerald-500"
                           : " text-slate-400")
                        }
                     >
                        <Link to={link.to}>{link.name}</Link>
                     </li>
                  ))}
               </ul>
               <Button value="Donate Now" styles="px-12" />
            </div>
            </div>
         </div>
      </div>
      </header>
   );
};
