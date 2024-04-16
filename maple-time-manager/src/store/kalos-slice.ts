import { createSlice } from "@reduxjs/toolkit";

export type KalosState = {
  phase: number;
};

const initialState: KalosState = {
  phase: 0,
};

export const kalosSlice = createSlice({
  name: "kalos",
  initialState,
  reducers: {
    phaseUp(state) {
      state.phase++;
      if (state.phase > 4) {
        state.phase = 0;
      }
    },
  },
});

export const { phaseUp } = kalosSlice.actions;
