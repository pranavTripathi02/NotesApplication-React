import { createSlice } from "@reduxjs/toolkit";
import { TNote } from "../../types";

const initialState: TNote[] = [];

const notesListSlice = createSlice({
  name: "notesList",
  initialState,
  reducers: {
    noteAdd: (state, action) => {
      const { note } = action.payload;
      console.log(action.payload);
      return [...state, note];
    },
    noteEdit: (state, action: { payload: { newNote: TNote } }) => {
      const { newNote } = action.payload;
      const note = state.find((i) => i.id === newNote.id);
      if (note?.title && note?.description && note?.content) {
        note.title = newNote.title;
        note.description = newNote.description;
        note.content = newNote.content;
        note.tags = newNote.tags;
        note.lastModified = newNote.lastModified;
      }
      return state;
    },
    noteRemove: (state, action) => {
      const noteId = action.payload;
      return state.filter((item) => item.id !== noteId);
    },
  },
});

export const { noteAdd, noteRemove, noteEdit } = notesListSlice.actions;
export default notesListSlice.reducer;
