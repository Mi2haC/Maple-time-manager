import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  changeTimerDuration,
  startTimer,
  stopTimer,
} from "../store/timer-slice";

export function useKTimers() {
  const dispatch = useAppDispatch();
  const { timers } = useAppSelector((state) => state.timer);
  const timeout = useRef<number | null>(null);

  return (waitTime: number, currentPhase: number) => {
    const unResetTimerNames = ["gimic", "yorozu"];
    const changeDurationTimerNames = ["breath"];
    if (timeout.current) clearTimeout(timeout.current);
    switch (currentPhase) {
      case 0:
        timers.map((timer) => dispatch(stopTimer(timer.name)));
        timers.map((timer) => {
          dispatch(stopTimer(timer.name));
          if (changeDurationTimerNames.includes(timer.name)) {
            dispatch(
              changeTimerDuration({
                name: timer.name,
                duration: 60,
              })
            );
          }
        });
        break;
      case 1:
      case 2:
      case 3:
      case 4:
        timers.map((timer) => dispatch(stopTimer(timer.name)));
        timeout.current = setTimeout(() => {
          timers.map((timer) => {
            if (unResetTimerNames.includes(timer.name)) {
              dispatch(startTimer(timer.name));
            } else {
              dispatch(stopTimer(timer.name));
            }
            if (changeDurationTimerNames.includes(timer.name)) {
              dispatch(
                changeTimerDuration({
                  name: timer.name,
                  duration: Math.max(
                    timer.duration - 15 * (currentPhase - 1),
                    30
                  ),
                })
              );
            }
          });
        }, waitTime * 1000);
        break;
      default:
        break;
    }
  };
}
