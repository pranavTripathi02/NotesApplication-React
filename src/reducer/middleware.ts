import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";

import { noteAdd, noteRemove } from "./features/notesList";

import type { RootState } from "./store";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(noteAdd, noteRemove),
  effect: (_action, listenerApi) =>
    localStorage.setItem(
      "reduxState",
      JSON.stringify((listenerApi.getState() as RootState).notes),
    ),
});
