import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changedFilters: (state, action) => {
      const filters = action.payload;
      state = { filters };
      return state;
    },
  },
});

export const { changedFilters } = filterSlice.actions;
export default filterSlice.reducer;
