import styled from "styled-components";
import Button from "../components/UI/Button";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { startTimers, stopTimers } from "../store/timer-slice";
import Timers from "../components/Kalos/Timers";

export default function KalosPage() {
  const { isRunning } = useAppSelector((state) => state.timer);
  const dispatch = useAppDispatch();

  function handleStopTimers() {
    dispatch(stopTimers());
  }

  function handleStartTimers() {
    dispatch(startTimers());
  }

  return (
    <Container>
      <Title>Kalos time manager</Title>
      <Button onClick={isRunning ? handleStopTimers : handleStartTimers}>
        {isRunning ? "Stop all timers" : "Start all timers"}
      </Button>
      <Wrapper>
        <Timers />
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 80%;
  max-width: 60rem;
  margin: 2rem auto;
  border-radius: 8px;
  color: white;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  color: #e1d8f0;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 3rem 0;
`;
