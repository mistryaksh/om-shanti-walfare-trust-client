import React, { FC } from 'react';

import { EventCard as Card } from '../components';

export const EventsModule: FC = (): JSX.Element => {
   return (
      <div className="px-72 py-48 w-full h-screen" style={{ background: "url('./images/events-bg.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
         <div className="text-center">
            <p className="text-emerald-500 text-xl font-medium tracking-wider mb-6">
               What We Are Boing
            </p>
            <h1 className="text-blue-950 text-5xl font-semibold tracking-wide leading-normal mb-12">
               We Arrange Many Social Events <br /> For Charity Donations
            </h1>
         </div>
         <div className="flex flex-col items-center gap-y-8">
            <h1 className="text-slate-300 text-4xl font-medium tracking-wide leading-normal mb-12">
               Comming soon
            </h1>
            {/* <Card title="Donation is hope" img="" date="8:30 - 9:30" location="Gujarat, India" />
            <Card title="" img="A hand for children" date="8:30 - 9:30" location="Gujarat, India" />
            <Card title="Help for children" img="" date="8:30 - 9:30" location="Gujarat, India" /> */}
         </div>
      </div>
   );
};