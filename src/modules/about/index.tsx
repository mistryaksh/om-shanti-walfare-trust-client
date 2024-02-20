import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../core/components';

export const AboutModule: FC = (): JSX.Element => {
   const navigate = useNavigate();

   return (
      <div className="bg-white px-64 py-44">
         <div className="grid grid-cols-2">
            <div className="w-full">
               <p className="text-emerald-500 text-xl font-medium tracking-wider mb-6">
                  About Our Foundetion
               </p>
               <h1 className="text-blue-950 text-5xl font-semibold tracking-wide leading-normal mb-12">
                  Empowering Lives: A Dual Approach to Health
               </h1>
               <p className="text-md text-gray-500 tracking-wide font-light leading-7 mb-10">
                  In 2020, the non-profit organization "Health Empowerment Initiative" recognized the
                  urgent need for health awareness in a diverse urban community facing high rates of
                  HIV/AIDS and cancer.
               </p>
               <p className="text-md text-gray-500 tracking-wide font-light leading-7 mb-12">
                  Determined to address both public health challenges simultaneously,
                  the organization initiated a comprehensive health awareness program. This case story
                  details the successful implementation of dual HIV and cancer awareness initiatives.
               </p>
               <Button value="About US" onClick={() => navigate('/about')} />
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
