/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { FC } from 'react';

import { EventCardProps } from '../../interface';

export const EventCard: FC<EventCardProps> = ({ title, img, date, location }): JSX.Element => {
   return (
      <div className="group w-full bg-white rounded-md shadow-none group-hover:light-shadow ease-in-out duration-300">
         <div className="grid grid-cols-12 items-center w-full">
            <div className="col-span-2">
               <img src={img} alt="event-image" />
            </div>
            <div className="col-span-10">
               <h1>{title}</h1>
               <div>
                  <p>{date}</p>
                  <p>{location}</p>
               </div>
            </div>
         </div>
      </div>
   );
};