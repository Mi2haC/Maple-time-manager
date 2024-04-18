import arrowsWAV from "../assets/audio/arrows.wav";
import breathWAV from "../assets/audio/breath.wav";
import gimicWAV from "../assets/audio/gimic.wav";
import laserWAV from "../assets/audio/laser.wav";
import yorozuWAV from "../assets/audio/yorozu.wav";

const kalosWAV: Record<
  "arrows" | "breath" | "gimic" | "laser" | "yorozu",
  string
> = {
  arrows: arrowsWAV,
  breath: breathWAV,
  gimic: gimicWAV,
  laser: laserWAV,
  yorozu: yorozuWAV,
};

export function playKAudio(name: string) {
  Object.entries(kalosWAV).forEach(([key, value]) => {
    if (key === name) {
      const audio = new Audio(value);
      audio.play();
    }
  });
}
