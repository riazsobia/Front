import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./reducers/courseReducer";

export default function configureAppStore(initialState) {
  return configureStore({
    reducer: { courses: courseReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
    preloadedState: initialState,
  });
}
