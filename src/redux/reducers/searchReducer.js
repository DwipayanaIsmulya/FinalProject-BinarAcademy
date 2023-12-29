import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: [],
};

const courseSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = courseSlice.actions;

export default courseSlice.reducer;
