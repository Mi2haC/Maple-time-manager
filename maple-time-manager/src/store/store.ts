import { configureStore } from "@reduxjs/toolkit";
import { timerSlice } from "./timer-slice";
import { kalosSlice } from "./kalos-slice";

export const store = configureStore({
  reducer: {
    timer: timerSlice.reducer,
    kalos: kalosSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
