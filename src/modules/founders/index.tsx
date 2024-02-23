import React, { FC } from 'react';

import { FounderCard as Card } from '../../core/components';

export const FoundersModule: FC = () => {
   const renderFounders = () => {
      return (
         <>
            <div className="text-center">
               <p className="text-emerald-500 text-xl font-medium tracking-wider mb-4">About Our Founders</p>
               <h1 className="text-blue-950 text-5xl font-semibold tracking-wide leading-normal mb-20">Our Founders</h1>
            </div>
            <div className="grid grid-cols-2 items-center gap-8">
               <Card
                  title="Subodh Gangaram"
                  description="Dr. subodh Gangaram bawdane is a MBBS doctor, he studied in DY Patil medical college kolhapur , he started his carrier as medical officer in Malgund  in Ratangiri peripheral aera.
                  He shifted to mumbai and started clinic in  parksite vikhroli w and completed 26 years of successful practice."
               />
               <Card
                  title="Bharti Subodh"
                  description="Dr. Bharti subodh bawdane is a MBBS doctor, she studied in DY Patil medical college kolhapur , she started her carrier as medical officer in khandala vatad in Ratangiri peripheral aera.
                  She shifted to mumbai and started clinic in  parksite vikhroli w and completed 26 years of successful practice."
               />
            </div>
         </>
      );
   }

   
      return (
         <div className="bg-slate-50 px-40 py-40">
            {renderFounders()}
         </div>
      );
};
