import { useEffect, useState } from "react";
import styled from "styled-components";

export type KDescriptionProps = {
  description: string;
  time: number;
};

export default function KDescription({ description, time }: KDescriptionProps) {
  const [waitingTime, setWaitingTime] = useState(time * 1000);

  useEffect(() => {
    const timer = setInterval(function () {
      setWaitingTime((prevTime) => {
        if (prevTime <= 0) {
          return prevTime;
        }
        return prevTime - 50;
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedWaitingTime = (waitingTime / 1000).toFixed(2);

  return (
    <Description>
      <p>Waiting for next phase : {formattedWaitingTime}</p>
      <p>{description}</p>
    </Description>
  );
}

const Description = styled.div`
  height: auto;
  margin: 1rem 0 0 0;
  padding: 0.5rem;
  border-style: solid;
  border-radius: 0.5rem;
  border-color: #e1d8f0;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 1rem;
`;
