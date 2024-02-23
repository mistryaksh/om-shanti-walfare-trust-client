import React, { FC } from 'react';

export const ActivitiesModule: FC = () => {
   const renderActivities = () => {
      return (
         <>
            <div className="text-center">
               <h1 className="text-blue-950 text-5xl font-semibold tracking-wide leading-normal mb-20">Activities Photos</h1>
            </div>
            <div className="">
               <div className="flex gap-x-6 w-full">
                  <div className="flex flex-col gap-y-6">
                     <div className="border-[10px] border-y-slate-300 border-x-emerald-400 pl-2.5 pt-2.5 rounded">
                        <img src="/images/activities/activity1.jpg" alt="activity" className="aspect-video rounded" />
                     </div>
                     <div className="border-[10px] border-x-slate-300 border-y-emerald-400 pr-2.5 pb-2.5 rounded">
                        <img src="/images/activities/activity2.jpg" alt="activity" className="aspect-video rounded" />
                     </div>
                     <div className="border-[10px] border-y-slate-300 border-x-emerald-400 pl-2.5 pt-2.5 rounded">
                        <img src="/images/activities/activity5.jpg" alt="activity" className="rounded" />
                     </div>
                  </div>
                  <div className="flex flex-col gap-y-6">
                     <div className="border-[10px] border-x-slate-300 border-y-emerald-400 pr-2.5 pb-2.5 rounded">
                        <img src="/images/activities/activity4.jpg" alt="activity" />
                     </div>
                     <div className="border-[10px] border-y-slate-300 border-x-emerald-400 pl-2.5 pt-2.5 rounded">
                        <img src="/images/activities/activity3.jpg" alt="activity" className="aspect-video" />
                     </div>
                     <div className="border-[10px] border-x-slate-300 border-y-emerald-400 pr-2.5 pb-2.5 rounded">
                        <img src="/images/activities/activity6.jpg" alt="activity" className="aspect-video" />
                     </div>
                  </div>
               </div>
            </div>
         </>
      );
   }

   
      return (
         <div className="bg-white px-40 py-40">
            {renderActivities()}
         </div>
      );
};
