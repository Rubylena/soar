import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imageUrl: "",
  name: "Charlene Reed",
  username: "Charlene Reed",
  email: "CharleneReed@gmail.com",
  password: "7777",
  DOB: "1998-05-27",
  presentAddress: "Chicago",
  permanentAddress: "Texas",
  city: "Texas",
  postalCode: "000000",
  country: "USA",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
