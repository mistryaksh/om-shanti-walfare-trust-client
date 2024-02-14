import { createApi } from "@reduxjs/toolkit/query/react";

import { UserReduxSetup } from '../../utils/server.utils';

const ProgramApi = createApi({
   baseQuery: UserReduxSetup,
   reducerPath: "programApi",
   tagTypes: ["programApi"],
   endpoints: ({ mutation, query }) => ({}),
});

export const ProgramApiReducer = ProgramApi.reducer;
export const {} = ProgramApi;
