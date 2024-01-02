import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myCourse: [],
};

const ksCourseSlice = createSlice({
  name: "ksCourse",
  initialState,
  reducers: {
    setMyCourse: (state, action) => {
      state.myCourse = action.payload;
    },
  },
});

export const { setMyCourse, setFilteredCourse } = ksCourseSlice.actions;

export const ksCourseReducer = ksCourseSlice.reducer;
