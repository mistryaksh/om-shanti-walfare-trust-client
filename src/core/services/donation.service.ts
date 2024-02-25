import { createApi } from "@reduxjs/toolkit/query/react";

import { UserReduxSetup } from '../utils/server.utils';
import { IDonation } from "../interface";

import { API_ROUTES, API_METHODS } from "../enums";

const DonationApi = createApi({
   baseQuery: UserReduxSetup,
   reducerPath: "donationApi",
   tagTypes: ["donationApi"],
   endpoints: ({ mutation }) => ({
      NewDonation: mutation<{ data: { paymentURL: string } }, IDonation>({
         query: (donation) => {
            return {
               url: API_ROUTES.DONATIONS,
               method: API_METHODS.POST,
               body: { ...donation },
            };
         },
      }),
   }),
});

export const DonationApiReducer = DonationApi.reducer;
export const DonationApiMiddleware = DonationApi.middleware;
export const { useNewDonationMutation } = DonationApi;
