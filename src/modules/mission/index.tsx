import React, { FC } from 'react';
import { IoSettingsSharp } from "react-icons/io5";
import { GiAwareness } from "react-icons/gi";
import { BsClipboard2PlusFill } from "react-icons/bs"
import { GiStigmata } from "react-icons/gi";

import { MissionCard as Card } from '../../core/components';

type MissionModuleProps = {
   isHome?: boolean;
}

export const MissionModule: FC<MissionModuleProps> = ({ isHome }) => {
   const desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

   const renderMissions = () => {
      return (
         <>
            <div className="text-center">
               <p className="text-emerald-500 text-xl font-medium tracking-wider mb-6">What We Are Doing</p>
               <h1 className="text-blue-950 text-5xl font-semibold tracking-wide leading-normal mb-20">We Are In A Mission To <br/> Help The Helpless</h1>
            </div>
            <div className="grid grid-cols-2 items-center gap-8">
               <Card
                  title="Raise Awareness"
                  description="Increase knowledge about HIV/AIDS transmission, prevention, and cancer risk factors within the target community"
                  icon={(<GiAwareness />)}
               />
               <Card
                  title="Reduce Stigma"
                  description="Combat social stigma associated with HIV/AIDS and cancer through community engagement and open dialogue."
                  icon={(<GiStigmata />)}
               />
               <Card
                  title="Promote Testing and Screening:"
                  description="Encourage regular HIV testing and cancer screenings while facilitating access to testing and screening facilities."
                  icon={(<BsClipboard2PlusFill />)}
               />
               <Card
                  title="Provide Support Services:"
                  description="Establish support services for individuals affected by HIV/AIDS and cancer, offering emotional and informational support."
                  icon={(<IoSettingsSharp />)}
               />
            </div>
         </>
      );
   }

   if (isHome) {
      return (
         <div className="bg-slate-50 px-64 py-52">
            {renderMissions()}
         </div>
      );
   }

   return (
      <div>
         {renderMissions()}
      </div>
   );
};
