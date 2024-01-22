import { createSlice } from "@reduxjs/toolkit";
import { TFilter, TFilterType } from "../../types";

const initialState: TFilter = {
  filter: "title",
  sortAsc: true,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changedFilters: (
      state,
      action: {
        payload: {
          filterType?: TFilterType | undefined;
          sorting?: boolean | undefined;
        };
      },
    ) => {
      const { filterType, sorting } = action.payload;
      const newState: TFilter = state;
      if (filterType) newState.filter = filterType;
      if (sorting !== undefined) newState.sortAsc = sorting;
      return newState;
    },
  },
});

export const { changedFilters } = filterSlice.actions;
export default filterSlice.reducer;
