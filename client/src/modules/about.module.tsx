import React, { FC } from 'react';

import { Button } from '../core/components';

export const AboutModule: FC = (): JSX.Element => {
   return (
      <div className="bg-white px-72 py-44">
         <div className="grid grid-cols-2">
            <div className="w-full">
               <p className="text-emerald-500 text-xl font-medium tracking-wider mb-6">
                  About Our Foundetion
               </p>
               <h1 className="text-blue-950 text-5xl font-semibold tracking-wide leading-normal mb-12">
                  We Are In A Mission To <br /> Help Helpless
               </h1>
               <p className="text-md text-gray-500 tracking-wide font-light leading-7 mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,mod tempor <br /> incididunt ut labore et dolore magna aliqua. Utnixm, quis nostrud <br /> exercitation ullamc.
               </p>
               <p className="text-md text-gray-500 tracking-wide font-light leading-7 mb-12">
                  Lorem ipvsum dolor sit amext, consectetur adipisicing elit, smod <br /> tempor incididunt ut labore et dolore.
               </p>
               <Button value="About US" />
            </div>
            <div className="relative w-full bg-white">
               <div className="flex flex-col items-end">
                  <img src="./images/about1.png" alt="about-1" />
               </div>
               <div className="absolute bottom-14 left-16">
                  <img src="./images/about2.png" alt="about-2" />
               </div>
            </div>
         </div>
      </div>
   );
};
