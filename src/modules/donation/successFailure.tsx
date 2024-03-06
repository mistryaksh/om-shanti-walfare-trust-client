import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useLazyCheckStatusQuery } from '../../core/services';

import { Loader } from '../../core/components';


export const SuccessFailureModule: FC = () => {
   const { merchantTransactionId } = useParams();
   const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

   const [CheckStatus, { data, error, isError, isSuccess, isLoading }] = useLazyCheckStatusQuery();

   useEffect(() => {
      if (isError) {
         console.log(error);
         return;
      }

      if (isSuccess) {
         if (data?.data?.status === "SUCCESS") {
            setIsPaymentSuccess(true);
         }
      }

      (async () => {
         await CheckStatus({ transactionId: merchantTransactionId as string });
      })();
   }, [merchantTransactionId, isSuccess, isError, error, data, CheckStatus, setIsPaymentSuccess]);

   if (isLoading) {
      return (
         <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Loader />
         </div>
      );
   }

   if (merchantTransactionId) {
      return (
         <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-4xl font-bold text-slate-800 mb-6">Merchant Transaction ID:- <span className="text-slate-600">{merchantTransactionId}</span></div>
         </div>
      );
   }

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
         {isPaymentSuccess ? (
         <SuccessPage />
         ) : (
         <FailedPage />
         )}
      </div>
   );
};

function SuccessPage() {
   return (
      <div className="bg-[#85D2EC] w-full overflow-hidden">
         <div className="w-full overflow-hidden" style={{ background: 'url("https://static.vecteezy.com/system/resources/previews/015/876/098/original/success-payment-icon-in-flat-style-approved-money-illustration-on-isolated-background-successful-pay-sign-business-concept-vector.jpg") no-repeat fixed center', backgroundSize: 'contain' }}>
            <div className="flex flex-col items-center justify-center p-6 mt-[78px] -ml-16 w-full h-screen bg-white/0 rounded-md shadow-md overflow-hidden">
               <h2 className="text-2xl font-bold text-green-500 mb-6">Payment Successful</h2>
               <p className="text-gray-500 text-sm">Thank you for your payment!</p>
               {/* Add any animations or additional content for failure */}
            </div>
         </div>
      </div>
   );
}

function FailedPage() {
   return (
      <div className="bg-[#85D2EC] w-full overflow-hidden">
         <div className="w-full overflow-hidden" style={{ background: 'url("https://static.vecteezy.com/system/resources/previews/015/876/548/non_2x/fail-payment-icon-in-flat-style-declined-money-illustration-on-isolated-background-rejected-pay-sign-business-concept-vector.jpg") no-repeat fixed center', backgroundSize: 'contain' }}>
            <div className="flex flex-col items-center justify-center p-6 mt-[90px] -ml-9 w-full h-screen bg-white/0 rounded-md overflow-hidden">
               <h2 className="text-2xl font-bold text-red-500 mb-6">Payment Failed</h2>
               <p className="text-gray-500 text-sm">Oops! Something went wrong with your payment.</p>
               {/* Add any animations or additional content for failure */}   
            </div>
         </div>
      </div>
   );
}