import React, { FC, useState } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { TfiMobile, TfiEmail } from "react-icons/tfi";


import { IUserContact } from '../../core/interface';
import { useNewUserContactMutation } from '../../core/services';

import { Button, Input } from '../../core/components';

export const ContactModule: FC = () => {
   const [
      newUserContact,
      error,
   ] = useNewUserContactMutation();

   // useState(() => {
   //    if (error) {
   //       console.log('Error:', error);
   //    }
   // }, [error]);

   return (
      <div className="w-full">
         <h4 className="text-blue-950 text-3xl font-normal mb-6">Get in Touch</h4>
         <div className="grid grid-cols-12 gap-x-28">
            <div className="col-span-8">
               <form className="flex flex-col items-start justify-between gap-y-8 w-full">
                  <textarea
                     rows={6}
                     placeholder="Enter your message here"
                     className="border border-slate-300 bg-transparent rounded-sm text-sm w-full focus:outline-none active:outline-none focus:border-emerald-500 active:border-emerald-500 px-4 py-3.5 placeholder-slate-400"
                  />
                  <div className="flex items-center gap-x-8 w-full">
                     <Input
                        type="text"
                        placeholder="Enter your name"
                     />
                     <Input
                        type="email"
                        placeholder="Email"
                     />
                  </div>
                  <Input
                     type="text"
                     placeholder="Subject"
                  />
                  <Button
                     value="Send Message"
                     sm
                  />
               </form>
            </div>
            <div className="col-span-4 flex flex-col gap-y-10">
               <div className="flex items-start gap-x-3">
                  <IoHomeOutline className="text-2xl text-slate-400 mt-1" />
                  <div>
                     <h4 className="text-blue-950 text-base font-light mb-1">1234 Street Name,</h4>
                     <p className="text-slate-500 text-base font-light">City Name, United States</p>
                  </div>
               </div>
               <div className="flex items-start gap-x-3">
                  <TfiMobile className="text-2xl text-slate-400 mt-1" />
                  <div>
                     <h4 className="text-blue-950 text-base font-light mb-1">+91 93729 97878</h4>
                     <p className="text-slate-500 text-base font-light">Mon to Fri 9am to 6pm</p>
                  </div>
               </div>
               <div className="flex items-start gap-x-3">
                  <TfiEmail className="text-2xl text-slate-400 mt-1" />
                  <div>
                     <h4 className="text-blue-950 text-base font-light mb-1">omshantiwelfareturst@gmail.com</h4>
                     <p className="text-slate-500 text-base font-light">Send us your query anytime!</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};