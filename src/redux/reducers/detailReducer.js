import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: [],
};

const courseSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    setDetails: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { setDetails } = courseSlice.actions;

export default courseSlice.reducer;
