/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { FC } from 'react';

import { CAUSE_CARD_STYLES } from '../../constants';

const STYLES = CAUSE_CARD_STYLES;

type CauseCardProps = {
   title: string;
   img: string;
   raised: number;
   goal: number;
   onClick?: () => void;
};

export const CauseCard: FC<CauseCardProps> = ({ title, img, raised, goal, onClick }) => {
   return (
      <div className={STYLES.MAIN}>
         <div className={STYLES.IMG}>
            <img src={img} alt="cause-image" className="w-full rounded-md-top" />
         </div>
         <div className={STYLES.BODY}>
            <h3 className={STYLES.TITLE} onClick={onClick}>
               {title}
            </h3>
            <div className="mt-9 mb-5 w-full">
               <div className="flex justify-between mb-1">
                  <span className="text-xs tracking-wide font-light text-blue-950">Raised</span>
                  <span className="text-sm font-semibold text-emerald-500">{Math.round((raised / goal) * 100)}%</span>
               </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 shadow-inner">
                  <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: `${Math.round((raised / goal) * 100)}%` }}></div>
               </div>
            </div>
            <div className="flex items-center justify-between">
               <div className={STYLES.RAISED}>
                  <span className="text-xs font-light">Raised</span>: ${raised}
               </div>
               <div className={STYLES.GOAL}>
                  <span className="text-xs font-light">Goal</span>: ${goal}
               </div>
            </div>
         </div>
      </div>
   );
}  