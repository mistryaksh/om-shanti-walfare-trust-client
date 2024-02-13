import React, { FC } from "react";

import { SocialLinks } from "../../index";

export const Footer: FC = (): JSX.Element => {
   return (
      <footer className="px-72 py-10 w-full h-auto" style={{ background: "url('./images/footer-bg.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
         <div className="flex items-center justify-between">
            <p className="inline-block text-base text-slate-500 py-0 font-light focus:outline-none active:outline-none">Copyright &copy;2024</p>
            <div className="flex items-center gap-x-2.5">
            <SocialLinks />
            </div>
         </div>
      </footer>
   );
};
