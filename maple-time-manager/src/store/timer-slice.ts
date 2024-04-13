import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { defaultTimers } from "../data/default-timers";

export type Timer = {
  name: string;
  duration: number;
  isRunning: boolean;
};

type TimersState = {
  timers: Timer[];
};

const initialState: TimersState = {
  timers: defaultTimers,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    startTimer(state, action: PayloadAction<string>) {
      const index = state.timers.findIndex(
        (timer) => timer.name === action.payload
      );
      if (index !== -1) state.timers[index].isRunning = true;
    },
    stopTimer(state, action: PayloadAction<string>) {
      const index = state.timers.findIndex(
        (timer) => timer.name === action.payload
      );
      if (index !== -1) state.timers[index].isRunning = false;
    },
  },
});

export const { startTimer, stopTimer } = timerSlice.actions;
