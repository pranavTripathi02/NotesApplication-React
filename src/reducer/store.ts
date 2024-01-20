import { configureStore } from "@reduxjs/toolkit";
import filters from "./features/filters";
import notesList from "./features/notesList";
import { listenerMiddleware } from "./middleware";

const localState = JSON.parse(localStorage.getItem("reduxState") || "null");
console.log(localStorage.getItem("reduxState"), localState);

const store = configureStore({
  preloadedState: {
    notes: localState === null ? [] : localState,
    filters: "title",
  },
  reducer: {
    notes: notesList,
    filters: filters,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listenerMiddleware.middleware),
});

function saveToLocalStorage(state: RootState) {
  try {
    const localState = JSON.stringify(state);
    localStorage.setItem("reduxState", localState);
  } catch (e) {
    console.error(e);
  }
}

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export default store;
