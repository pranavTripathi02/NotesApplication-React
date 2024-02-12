import { configureStore } from "@reduxjs/toolkit";
import filters from "./features/filters";
import notesList from "./features/notesList";
import { ThunkMiddleware } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    notes: notesList,
    filters: filters,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = ReturnType<ThunkMiddleware>;
export default store;
