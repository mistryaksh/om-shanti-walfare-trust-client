import React from 'react';
import { FaPhone } from "react-icons/fa6";

import { Button } from '../components';

export const HomeModule = () => {
   return (
      <div className="w-full max-h-full">
         <div className="w-full h-screen" style={{ backgroundImage: "url('./hero.png')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="container mx-auto">
               <div className="flex items-center justify-start px-40 py-52">
                  <div>
                     <div className="animate__animated animate__fadeInUp animate__delay-0.8s">
                        <h1 className="text-blue-950 text-7xl tracking-wider font-extrabold leading-tight mb-6">
                           Our Helping To <br /> The World.
                        </h1>
                        <p className="text-blue-950 text-md tracking-wider font-light leading-relaxed mb-12">
                           Onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut bore et dolore <br /> magnt, sed do eiusmod.
                        </p>
                     </div>
                     <div className="flex items-center">
                        <Button
                           value="Donate Now"
                           styles="animate__animated animate__fadeInLeft animate__delay-1s"
                        />
                        <Button
                           styles="animate__animated animate__fadeInRight animate__delay-1s"
                           transparent
                        >
                           <div className="flex items-center gap-x-2">
                              <FaPhone />
                              <span className="text-md font-semibold text-blue-950">+12 1234 4123</span>
                           </div>
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}