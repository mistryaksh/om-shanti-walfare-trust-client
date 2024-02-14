import { createApi } from "@reduxjs/toolkit/query/react";

import { UserReduxSetup } from '../../utils/server.utils';

const ContactApi = createApi({
   baseQuery: UserReduxSetup,
   reducerPath: "contactApi",
   tagTypes: ["contactApi"],
   endpoints: ({ mutation, query }) => ({}),
});

export const ContactApiReducer = ContactApi.reducer;
export const {} = ContactApi;
