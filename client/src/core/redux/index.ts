import { Middleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({});

const rootMiddleware: Middleware[] = [];

export const Store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(rootMiddleware);
   },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
setupListeners(Store.dispatch);
