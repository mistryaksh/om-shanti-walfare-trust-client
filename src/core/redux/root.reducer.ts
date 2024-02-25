import { combineReducers } from "@reduxjs/toolkit";

import {
   ContactApiReducer,
   EventApiReducer,
   EventCategotyApiReducer,
   ProgramApiReducer,
   WebsiteApiReducer,
   DonationApiReducer
} from "../services";

export const rootReducer = combineReducers({
   contactApi: ContactApiReducer,
   eventApi: EventApiReducer,
   eventCategoryApi: EventCategotyApiReducer,
   programApi: ProgramApiReducer,
   websiteApi: WebsiteApiReducer,
   donationApi: DonationApiReducer
});