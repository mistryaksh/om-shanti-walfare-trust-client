import React, { FC } from "react";
import { IoChevronDown } from "react-icons/io5";

import { LAYOUT_STYLES } from "../../../../constants";
import { Button, SocialLinks } from "../../../index";

const STYLES = LAYOUT_STYLES;

export const HeaderTop: FC = (): JSX.Element => {
   return (
      <header className="border-b border-slate-100 bg-white py-5 w-full">
      <div className="container mx-auto w-full px-10">
         <div className="flex items-center justify-between max-w-full">
            <div className="flex items-center gap-x-5">
            <div className={STYLES.TEXT}>Phone: +99 (0) 101 0000 888</div>
            <div className={STYLES.TEXT}>Email: noreply@yourdomain.com</div>
            <SocialLinks />
            </div>
            <div className="flex items-center gap-x-5">
            <Button
               className={`${STYLES.BUTTON} border-r border-slate-500 pr-5`}
            >
               <div className="flex items-center gap-x-2">
                  <span>English</span>
                  <IoChevronDown />
               </div>
            </Button>
            <Button
               className={STYLES.BUTTON}
               value="Subscribe Now"
            />
            </div>
         </div>
      </div>
      </header>
   );
};