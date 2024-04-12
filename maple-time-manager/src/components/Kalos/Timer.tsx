import styled from "styled-components";
import { type Timer as TimerProps } from "../../store/timer-slice";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../store/hooks";

export default function Timer({ name, duration }: TimerProps) {
  const [remainingTime, setRemainingTIme] = useState(duration * 1000);
  const interval = useRef<number | null>(null);
  const { isRunning } = useAppSelector((state) => state.timer);

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(function () {
        setRemainingTIme((prevTime) => {
          if (prevTime <= 0) {
            return prevTime;
          }
          return prevTime - 50;
        });
      }, 50);
      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Wrapper>
      <Title>{name}</Title>
      <Counter>
        <StyledProgress max={duration * 1000} value={remainingTime} />
      </Counter>
      <Counter>{formattedRemainingTime}</Counter>
    </Wrapper>
  );
}

const Wrapper = styled.article``;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 0;
`;

const Counter = styled.p`
  text-align: center;
  font-size: 1.25rem;
  color: #e1d8f0;
`;

const StyledProgress = styled.progress`
  width: 100%;
  height: 1rem;
  border-radius: 3px;
  margin: 1rem 0;
  &::-webkit-progress-bar {
    background: #a5e5be;
    border-radius: 3px;
  }
  &::-webkit-progress-value {
    background: #398536;
    border-radius: 3px;
  }
`;
