import React, { FC } from 'react';

import { CauseCard as Card } from '../components';

export const CausesModule: FC = () => {
   return (
      <div className="bg-slate-50 px-72 py-48">
         <div className="text-center">
            <p className="text-emerald-500 text-xl font-medium tracking-wider mb-6">
               Our Cases You Can See
            </p>
            <h1 className="text-blue-950 text-5xl font-semibold tracking-wide leading-normal mb-12">
               Explore Our Latest Causes <br /> That We Works
            </h1>
         </div>
         <div className="flex items-center gap-x-8">
            <Card title="Ensure education for every poor childen" raised={20000} goal={35000} img="./images/case1.png" />
            <Card title="Providing healthy food for the children" raised={10000} goal={35000} img="./images/case2.png" />
            <Card title="Supply drinking water for the people" raised={25000} goal={35000} img="./images/case3.png" />
         </div>
      </div>
   );
};