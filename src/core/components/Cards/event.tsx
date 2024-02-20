/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { FC } from 'react';

import { Button } from '../index';

type EventCardProps = {
   title: string;
   subTitle: string;
   description: string;
   img: string;
   date: Date;
};

export const EventCard: FC<EventCardProps> = ({ title, subTitle, img, date, description }): JSX.Element => {
   return (
      <div className="group w-full bg-white rounded-md light-shadow ease-in-out duration-300">
         <div className="flex flex-col items-start w-full">
            <div className="w-full">
               <img src={img} alt="event-image" className="object-cover w-full aspect-video rounded-t-md" />
            </div>
            <div className="w-full px-4 pt-6 pb-4">
               <div className="flex items-center justify-between w-full mb-4">
                  <h4 className="text-lg text-slate-500">
                     {subTitle}
                  </h4>
                  <p className="text-xs text-emerald-500">{new Date(date).toDateString()}</p>
               </div>
               <h1 className="text-2xl text-slate-600 font-medium tracking-wide mb-2.5">{title}</h1>
               <div className="text-sm font-light text-slate-400 tracking-wide mb-8" dangerouslySetInnerHTML={{ __html: description }} />
               <div className="flex justify-end">
                  <Button value="Donate Now" sm />
               </div>
            </div>
         </div>
      </div>
   );
};