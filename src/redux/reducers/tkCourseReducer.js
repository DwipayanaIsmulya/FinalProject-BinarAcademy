import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCourse: [],
};

const tkCourseSlice = createSlice({
  name: "tkCourse",
  initialState,
  reducers: {
    setAllCourse: (state, action) => {
      state.allCourse = action.payload;
    },
  },
});

export const { setAllCourse, setFilteredCourse } = tkCourseSlice.actions;

export const tkCourseReducer = tkCourseSlice.reducer;
