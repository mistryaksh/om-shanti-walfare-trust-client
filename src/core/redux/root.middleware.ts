
import { Middleware } from "@reduxjs/toolkit";

import {
   ContactApiMiddleware,
   EventApiMiddleware,
   EventCategotyApiMiddleware,
   ProgramApiMiddleware,
   WebsiteApiMiddleware,
   DonationApiMiddleware
} from "../services";

export const rootMiddleware: Middleware[] = [
   ContactApiMiddleware,
   EventApiMiddleware,
   EventCategotyApiMiddleware,
   ProgramApiMiddleware,
   WebsiteApiMiddleware,
   DonationApiMiddleware
];