import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const UserReduxSetup = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BACKEND_URL as string,
});
