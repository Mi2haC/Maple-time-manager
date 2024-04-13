import { KDescriptionProps } from "../../components/Kalos/KDescription";

type kalosPhaseDescription = KDescriptionProps & { phase: number };

export const kalosPhaseDescriptions: kalosPhaseDescription[] = [
  {
    phase: 0,
    time: 0,
    description: "phase 1 : 1段階を倒してテロップがでたら押す",
  },
  {
    phase: 1,
    time: 10,
    description: "phase 2-1 : 暴走に入る時に押す",
  },
  {
    phase: 2,
    time: 50,
    description: "phase 2-2 : 暴走に入る時に押す",
  },
  {
    phase: 3,
    time: 50,
    description: "phase 2-3 : 暴走に入る時に押す",
  },
  {
    phase: 4,
    time: 50,
    description: "phase 2-4 : あとは倒すだけ",
  },
];
