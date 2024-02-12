import React from 'react';
import { IoSettingsOutline } from "react-icons/io5";

import { MissionCard as Card } from '../components';

export const MissionModule = () => {
   const desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

   return (
   <div className="bg-slate-50 px-72 py-52">
      <div className="text-center">
         <p className="text-emerald-500 text-xl font-medium tracking-wider mb-6">What We Are Doing</p>
         <h1 className="text-blue-950 text-5xl font-semibold tracking-wide leading-normal mb-20">We Are In A Mission To <br/> Help The Helpless</h1>
      </div>
      <div className="flex items-center gap-x-8">
         <Card title="Clean water" description={desc} icon={(<IoSettingsOutline />)} />
         <Card title="Clean water" description={desc} icon={(<IoSettingsOutline />)} />
         <Card title="Clean water" description={desc} icon={(<IoSettingsOutline />)} />
      </div>
   </div>
   )
}