import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const UserReduxSetup = fetchBaseQuery({
        baseUrl: "https://om-shanti-backend-2-dz6i.onrender.com/api/1.0",
});
