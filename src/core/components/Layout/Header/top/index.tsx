import React, { FC } from "react";
import { IoChevronDown } from "react-icons/io5";

import { LAYOUT_STYLES } from "../../../../constants";
import { Button } from "../../../index";

const STYLES = LAYOUT_STYLES;

export const HeaderTop: FC = (): JSX.Element => {
   return (
      <header className="border-b border-slate-100 bg-white py-5 w-full">
      <div className="container mx-auto w-full px-10">
         <div className="flex items-center justify-between max-w-full">
            <div className="flex items-center gap-x-5">
            <div className={STYLES.TEXT}>Phone: +91 93729 97878</div>
            <div className={STYLES.TEXT}>Email: omshantiwelfareturst@gmail.com</div>
            <div className={`border-none ${STYLES.TEXT}`}>Pan No: AAATO3609G</div>
            </div>
            {/* <div className="flex items-center gap-x-5">
            <Button
               className={STYLES.BUTTON}
            >
               <div className="flex items-center gap-x-2">
                  <span>English</span>
                  <IoChevronDown />
               </div>
            </Button>
            </div> */}
         </div>
      </div>
      </header>
   );
};