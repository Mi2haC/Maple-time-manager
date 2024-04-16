import { Timer } from "../../store/timer-slice";

export const defaultTimers: Timer[] = [
  { name: "laser", duration: 15, isRunning: false, isResetOnStop: true },
  { name: "arrows", duration: 15, isRunning: false, isResetOnStop: true },
  { name: "breath", duration: 60, isRunning: false, isResetOnStop: true },
  { name: "gimic", duration: 60, isRunning: false, isResetOnStop: false },
  { name: "yorozu", duration: 90, isRunning: false, isResetOnStop: true },
  { name: "spawn", duration: 7.5, isRunning: false, isResetOnStop: true },
];
