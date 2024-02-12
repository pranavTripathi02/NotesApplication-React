import { createSlice } from "@reduxjs/toolkit";
import { TAuth } from "../../types";

const initialState: TAuth = {
  filter: "title",
  sortAsc: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducer: {
    // builder.
  },
});

export default authSlice.reducer;
