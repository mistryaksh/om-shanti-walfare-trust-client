import React, { FC } from 'react';
import { IoSettingsOutline } from "react-icons/io5";

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
            <div className="flex items-center gap-x-8">
               <Card title="Clean water" description={desc} icon={(<IoSettingsOutline />)} />
               <Card title="Clean water" description={desc} icon={(<IoSettingsOutline />)} />
               <Card title="Clean water" description={desc} icon={(<IoSettingsOutline />)} />
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
