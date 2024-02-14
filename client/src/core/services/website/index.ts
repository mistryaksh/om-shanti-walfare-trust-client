import { createApi } from "@reduxjs/toolkit/query/react";

import { UserReduxSetup } from '../../utils/server.utils';

const WebsiteApi = createApi({
   baseQuery: UserReduxSetup,
   reducerPath: "websiteApi",
   tagTypes: ["websiteApi"],
   endpoints: ({ mutation, query }) => ({}),
});

export const WebsiteApiReducer = WebsiteApi.reducer;
export const {} = WebsiteApi;
