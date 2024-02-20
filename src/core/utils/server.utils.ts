import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const UserReduxSetup = fetchBaseQuery({
   baseUrl: 'https://om-shanti-backend-2.onrender.com/api/1.0'
});