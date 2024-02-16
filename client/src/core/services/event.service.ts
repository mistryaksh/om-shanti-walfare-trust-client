import { createApi } from "@reduxjs/toolkit/query/react";

import { UserReduxSetup } from '../utils/server.utils';
import { IEvent } from "../interface";

import { API_ROUTES, API_METHODS } from "../enums";

const EventApi = createApi({
   baseQuery: UserReduxSetup,
   reducerPath: "eventApi",
   tagTypes: ["eventApi"],
   endpoints: ({ query }) => ({
      GetAllEvents: query<{ data: IEvent[] }, void>({
         query: () => {
            return {
               url: API_ROUTES.EVENTS,
               method: API_METHODS.GET,
            };
         },
      }),

      GetEventById: query<{ data: IEvent }, string>({
         query: (eventId) => `${API_ROUTES.EVENTS}/${eventId}`,
      }),
   }),
});

export const EventApiReducer = EventApi.reducer;
export const EventApiMiddleware = EventApi.middleware;
export const { useGetAllEventsQuery, useLazyGetEventByIdQuery } = EventApi;
