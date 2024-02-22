import React, { FC } from 'react';
import { Link } from "react-router-dom";

import { IHeaderLink } from "../../../interface";
import { LAYOUT_STYLES } from "../../../constants";
import { ROUTES } from "../../../enums";

const STYLES = LAYOUT_STYLES;

export const FooterTop: FC = () => {
   const links: IHeaderLink[] = [
      {
         name: "About US",
         to: ROUTES.ABOUT,
      },
      {
         name: "Latest Programs",
         to: ROUTES.PROGRAMS
      },
      {
         name: "Social Events",
         to: ROUTES.EVENTS
      },
      {
         name: "Our Blogs",
         to: ROUTES.BLOGS
      },
      {
         name: "Contact US",
         to: ROUTES.CONTACT
      },
   ];

   return (
      <div className="grid grid-cols-12 gap-x-20 mb-28">
         <div className="col-span-3">
            <img src="/transparent-logo.png" alt="logo" className="w-28" />
         </div>
         <div className="col-span-4">
            <h4 className="text-lg font-medium text-white mb-6">Contact Info</h4>
            <ul className="flex flex-col items-start gap-y-4 text-slate-500 text-base font-light tracking-wide">
               <li>
                  Address: 123, Lorem Ipsum, <br /> Dolor Sit Amet
               </li>
               <li>
                  Phone: +91 99204 41626 / 93729 97878
               </li>
               <li>
                  Email: omshantiwelfareturst@gmail.com
               </li>
            </ul>
         </div>
         <div className="col-span-4">
            <h4 className="text-lg font-medium text-white mb-6">Important Links</h4>
            <ul className="flex flex-col items-start gap-y-4">
               {links.map((link, index) => (
                  <li
                     key={index}
                     className={
                        STYLES.LINK +
                        ' text-slate-500 font-light tracking-wide'
                     }
                  >
                     <Link to={link.to}>{link.name}</Link>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};
