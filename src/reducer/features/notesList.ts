import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TNote } from "../../types";
import axios from "../../api/axios";

const initialState: TNote[] = [];

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
  const response = await axios.get("/notes");
  return response.data;
});

export const addNote = createAsyncThunk(
  "notes/addNote",
  async ({ note }: { note: Partial<TNote> }) => {
    console.log(note);
    const response = await axios.post("/notes", note);
    console.log(response);
    return note;
  },
);

export const editNote = createAsyncThunk(
  "notes/editNote",
  async ({ id, newNote }: { id: number; newNote: Partial<TNote> }) => {
    console.log(newNote);
    const response = await axios.patch(`/notes/${id}`, newNote);
    console.log(response);
    //
    return newNote;
  },
);

const notesListSlice = createSlice({
  name: "notesList",
  initialState,
  reducers: {
    notesLoaded: (action) => {
      console.log(action);
      // const notesList = action.payload;
      // return notesList;
    },
    noteAdd: (state, action) => {
      const { note } = action.payload;
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.fulfilled, (_state, action) => {
        const newNotes = action.payload;
        // state = newNotes;
        console.log("hita");
        return newNotes;
        // return state;
      })
      .addCase(addNote.fulfilled, (state, action) => {
        const note = action.payload;
        state = [...state, note];
        return state;
      })
      .addCase(editNote.fulfilled, (state, action) => {
        const newNote = action.payload;
        const note = state.find((i) => i.id === newNote.id);
        if (note?.title && note?.description && note?.content) {
          note.title = newNote.title;
          note.description = newNote.description;
          note.content = newNote.content;
          note.tags = newNote.tags;
          note.lastModified = newNote.lastModified;
        }
        return state;
      });
  },
});

export const { noteAdd, noteRemove, noteEdit } = notesListSlice.actions;
export default notesListSlice.reducer;
