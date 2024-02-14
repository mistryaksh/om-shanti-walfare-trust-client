import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const UserReduxSetup = fetchBaseQuery({
   baseUrl: process.env.BACKEND_BASE_URL,
});