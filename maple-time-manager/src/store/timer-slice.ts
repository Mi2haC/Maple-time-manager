import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { defaultTimers } from "../data/share/default-timers";

export type Timer = {
  name: string;
  duration: number;
  isRunning: boolean;
  isResetOnStop: boolean;
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
    changeTimerDuration(
      state,
      action: PayloadAction<{ name: string; duration: number }>
    ) {
      const index = state.timers.findIndex(
        (timer) => timer.name === action.payload.name
      );
      if (index !== -1) state.timers[index].duration = action.payload.duration;
    },
  },
});

export const { startTimer, stopTimer, changeTimerDuration } =
  timerSlice.actions;
