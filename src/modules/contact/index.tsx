import React, { FC } from 'react';

// import { IContact } from '../../core/interface';
// import { ContactService } from '../../core/services';

import { Button } from '../../core/components';

export const ContactModule: FC = () => {
   return (
      <div className="w-full">
         <h4 className="text-blue-950 text-3xl font-normal mb-6">Get in Touch</h4>
         <div className="grid grid-cols-12 gap-x-16">
            <div className="col-span-8">
               <form className="flex flex-col items-start gap-y-8 w-full">
                  <textarea
                     rows={6}
                     placeholder="Enter your message here"
                     className="border border-slate-300 bg-transparent rounded-sm text-sm w-full focus:outline-none active:outline-none focus:border-emerald-500 active:border-emerald-500 px-4 py-3.5 placeholder-slate-400"
                  />
                  <div className="flex items-center gap-x-8 w-full">
                     <input
                        type="text"
                        placeholder="Enter your name"
                        className="border border-slate-300 bg-transparent rounded-sm text-sm w-full focus:outline-none active:outline-none focus:border-emerald-500 active:border-emerald-500 px-4 py-3.5 placeholder-slate-400"
                     />
                     <input
                        type="email"
                        placeholder="Email"
                        className="border border-slate-300 bg-transparent rounded-sm text-sm w-full focus:outline-none active:outline-none focus:border-emerald-500 active:border-emerald-500 px-4 py-3.5 placeholder-slate-400"
                     />
                  </div>
                  <input
                     type="text"
                     placeholder="Subject"
                     className="border border-slate-300 bg-transparent rounded-sm text-sm w-full focus:outline-none active:outline-none focus:border-emerald-500 active:border-emerald-500 px-4 py-3.5 placeholder-slate-400"
                  />
                  <Button
                     value="Send Message"
                     sm
                  />
               </form>
            </div>
            <div className="col-span-4">
            </div>
         </div>
      </div>
   );
};