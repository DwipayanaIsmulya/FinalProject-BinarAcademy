import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myTransaction: {},
};

const myTransactionSlice = createSlice({
  name: "myTransaction",
  initialState,
  reducers: {
    setMyTransaction: (state, action) => {
      state.myTransaction = action.payload;
    },
  },
});

export const { setMyTransaction } = myTransactionSlice.actions;

export const myTransactionReducer = myTransactionSlice.reducer;
