import { createApi } from "@reduxjs/toolkit/query/react";

import { UserReduxSetup } from '../../utils/server.utils';

const EventApi = createApi({
   baseQuery: UserReduxSetup,
   reducerPath: "eventApi",
   tagTypes: ["eventApi"],
   endpoints: ({ mutation, query }) => ({}),
});

export const EventApiReducer = EventApi.reducer;
export const {} = EventApi;
