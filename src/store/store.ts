import { configureStore } from "@reduxjs/toolkit";
import moduleSlice from './slices/moduleSlice'
import userSlice from './slices/userSlice'

const store = configureStore({
  reducer: {
   module: moduleSlice, 
   user:userSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;
