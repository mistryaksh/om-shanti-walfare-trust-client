import { combineReducers } from "@reduxjs/toolkit";

import {
   ContactApiReducer,
   EventApiReducer,
   ProgramApiReducer,
   WebsiteApiReducer
} from "../services";

export const rootReducer = combineReducers({
   contactApi: ContactApiReducer,
   eventApi: EventApiReducer,
   programApi: ProgramApiReducer,
   websiteApi: WebsiteApiReducer,
});