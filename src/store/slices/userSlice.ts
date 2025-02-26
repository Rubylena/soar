import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 imageUrl:'/src/assets/accountowner.jpeg',
 name:'Charlene Reed',
 username:'Charlene Reed',
 email:'CharleneReed@gmail.com',
 password:'7777',
 DOB:'may 1998',
 presentAddress:'Chicago',
 permanentAddress:'Texas',
 city:'Texas',
 postalCode:'000000',
 country:'USA'

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
