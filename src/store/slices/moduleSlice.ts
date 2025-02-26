import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentModule: "",
};

const moduleSlice = createSlice({
  name: "module",
  initialState,
  reducers: {
    SetCurrentModule: (state, action) => {
      state.currentModule = action.payload;
    },
  },
});

export const { SetCurrentModule } = moduleSlice.actions;

export default moduleSlice.reducer;
