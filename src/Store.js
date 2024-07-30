import { configureStore } from "@reduxjs/toolkit";
import NameReducer from "./NameReducer";

export const store = configureStore({
  reducer: NameReducer,
});
