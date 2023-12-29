import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myProfile: {},
  user: {},
  updateProfile: {},
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setMyProfile: (state, action) => {
      state.myProfile = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUpdateProfile: (state, action) => {
      state.updateProfile = action.payload;
    },
  },
});

export const { setMyProfile, setUser, setUpdateProfile } = profileSlice.actions;

export default profileSlice.reducer;
