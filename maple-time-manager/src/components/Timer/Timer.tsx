import styled from "styled-components";
import {
  startTimer,
  stopTimer,
  type Timer as TimerProps,
} from "../../store/timer-slice";
import { useEffect, useRef, useState } from "react";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import Button from "../UI/Button";
import { useAppDispatch } from "../../store/hooks";
import { playKAudio } from "../../util/playKAudio";

export default function Timer({
  name,
  duration,
  isRunning,
  isResetOnStop,
}: TimerProps) {
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const interval = useRef<number | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setRemainingTime(duration * 1000);
  }, [duration]);

  // if (remainingTime <= 0 && interval.current) {
  //   clearInterval(interval.current);
  // }

  useEffect(() => {
    let timer: number;
    let isPlayed = false;
    if (isRunning) {
      timer = setInterval(function () {
        setRemainingTime((prevTime) => {
          if (prevTime > 3 * 1000) {
            isPlayed = false;
          } else if (!isPlayed) {
            playKAudio(name);
            isPlayed = true;
          }
          if (prevTime <= 0) {
            return duration * 1000;
          }
          return prevTime - 50;
        });
      }, 50);
      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current);
      if (isResetOnStop) {
        setRemainingTime(duration * 1000);
      }
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, duration, isResetOnStop, name]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  function handleReduceTime() {
    setRemainingTime((prevTime) => Math.max(prevTime - 1000, 0));
  }

  function handleAddTime() {
    setRemainingTime((prevTime) => Math.min(prevTime + 1000, duration * 1000));
  }

  function handleStopTime() {
    dispatch(stopTimer(name));
  }

  function handleStartTime() {
    dispatch(startTimer(name));
  }

  return (
    <Wrapper>
      <TitleButton
        textOnly
        onClick={isRunning ? handleStopTime : handleStartTime}
      >
        {name}
      </TitleButton>
      <Counter>
        <StyledProgress max={duration * 1000} value={remainingTime} />
      </Counter>
      <Counter>
        <IconButton onClick={handleReduceTime}>
          <BiCaretLeft size={"2rem"} />
        </IconButton>
        {formattedRemainingTime}
        <IconButton onClick={handleAddTime}>
          <BiCaretRight size={"2rem"} />
        </IconButton>
      </Counter>
    </Wrapper>
  );
}

const TitleButton = styled(Button)`
  width: 100%;
  font-size: 2rem;
  text-align: center;
  margin: 0;
  color: #e1d8f0;
  &:hover,
  :active {
    background-color: #9b9b8e;
    color: #e1d8f0;
  }
`;

const IconButton = styled(Button)`
  background-color: transparent;
  color: #e1d8f0;
  padding: 0.2rem;
  margin: 0.2rem;
  display: flex;
  align-items: center;
  &:hover,
  :active {
    background-color: #9b9b8e;
  }
`;

const Wrapper = styled.article``;

const Counter = styled.p`
  text-align: center;
  align-items: center;
  font-size: 1.2rem;
  color: #e1d8f0;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

const StyledProgress = styled.progress`
  width: 90%;
  height: 1rem;
  border-radius: 3px;
  margin: 1rem auto;
  &::-webkit-progress-bar {
    background: #a5e5be;
    border-radius: 3px;
  }
  &::-webkit-progress-value {
    background: #398536;
    border-radius: 3px;
  }
`;
