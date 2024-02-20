import React from 'react';
import { FaPhone } from "react-icons/fa6";

import { Button } from '../../core/components';
import { MissionModule } from '../mission';
import { AboutModule } from '../about';
import { ProgramsModule } from '../programs';
import { EventsModule } from '../events';
// import { BlogsModule } from '../blogs';

export const HomeModule = () => {
   return (
      <div className="w-full max-h-full">
         <div className="w-full h-screen" style={{ backgroundImage: "url('./hero.png')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="container mx-auto">
               <div className="flex items-center justify-start px-40 py-52">
                  <div>
                     <div className="animate__animated animate__fadeInUp animate__delay-0.8s">
                        <h1 className="text-blue-950 text-7xl tracking-wider font-bold leading-tight mb-6">
                           Empowering Health, <br />Inspiring Lives
                        </h1>
                        <p className="text-blue-950 text-md tracking-wider font-light leading-relaxed mb-12">
                        Empowering Health, Inspiring Lives Together, We Create a Stronger Tomorrow
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
                              <span className="text-md font-semibold text-blue-950">+91 99204 41626</span>
                           </div>
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <MissionModule isHome />
         <AboutModule />
         <ProgramsModule tagLine="Our Cases You Can See" heading="Explore Our Latest Programs That We Works" isHomePage />
         <EventsModule isHomePage />
         {/* <BlogsModule /> */}
      </div>
   );
}