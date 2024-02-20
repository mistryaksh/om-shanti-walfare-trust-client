import React, { FC } from 'react';

type PageLayoutProps = {
   title: string;
   children: React.ReactNode;
};

export const PageLayout: FC<PageLayoutProps> = ({ title, children }) => {
   return (
      <div>
         <div
            className="h-80 w-full"
            style={{
               background: "url('./images/hero2.png')",
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center',
               backgroundSize: 'cover'
            }}
         >
            <div className="flex items-center justify-center h-full w-full">
               <h1 className="text-5xl font-bold text-blue-950 tracking-wide">
                  {title}
               </h1>
            </div>
         </div>
         <div className="bg-slate-50 px-64 py-44">
            {children}
         </div>
      </div>
   );
};
