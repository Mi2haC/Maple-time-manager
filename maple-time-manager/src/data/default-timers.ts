import { Timer } from "../store/timer-slice";

export const defaultTimers: Timer[] = [
  { name: "laser", duration: 15, isRunning: false },
  { name: "arrows", duration: 15, isRunning: false },
  { name: "breath", duration: 60, isRunning: false },
  { name: "gimic", duration: 60, isRunning: false },
  { name: "yorozu", duration: 90, isRunning: false },
  { name: "spawn", duration: 7.5, isRunning: false },
];
