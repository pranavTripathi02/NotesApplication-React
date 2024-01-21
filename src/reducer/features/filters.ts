import { createSlice } from "@reduxjs/toolkit";
import { TFilter } from "../../types";

const initialState: TFilter = {
  filter: "title",
  sortAsc: true,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changedFilters: (state, action: { payload: TFilter }) => {
      const filters = action.payload;
      // if (filters.
      // console.log(state, filters);
      state.filter = filters.filter;
      state.sortAsc = filters.sortAsc;
      return state;
      // return (state = filters);
    },
  },
});

export const { changedFilters } = filterSlice.actions;
export default filterSlice.reducer;
