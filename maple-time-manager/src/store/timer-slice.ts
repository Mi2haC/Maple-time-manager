import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const defaultTimers: Timer[] = [
  { name: "laser", duration: 15 },
  { name: "arrows", duration: 15 },
  { name: "breath", duration: 30 },
  { name: "gimic", duration: 60 },
  { name: "yorozu", duration: 90 },
];

const initialState: TimersState = {
  isRunning: false,
  timers: defaultTimers,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    startTimers(state) {
      state.isRunning = true;
    },
    stopTimers(state) {
      state.isRunning = false;
    },
    addTimer(state, action: PayloadAction<Timer>) {
      state.timers.push(action.payload);
    },
  },
});

export const { startTimers, stopTimers, addTimer } = timerSlice.actions;
