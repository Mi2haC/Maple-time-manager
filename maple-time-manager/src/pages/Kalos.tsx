import styled from "styled-components";
import Button from "../components/UI/Button";
import KTimers from "../components/Kalos/KTimers";
import KDescription from "../components/Kalos/KDescription";
import { kalosPhaseDescriptions } from "../data/kalos/phase-description";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { phaseUp } from "../store/kalos-slice";
import { useKTimers } from "../hooks/useKTimers";
import { useEffect } from "react";

export default function KalosPage() {
  const { phase: currentPhase } = useAppSelector((state) => state.kalos);
  const dispatch = useAppDispatch();
  const ktimer = useKTimers();

  const index = kalosPhaseDescriptions.findIndex(
    (desc) => desc.phase === currentPhase
  );

  const { phase, time, ...otherProps } = kalosPhaseDescriptions[index];

  function handlePhaseUp() {
    dispatch(phaseUp());
  }

  useEffect(() => {
    ktimer(time, phase);
  }, [time, phase]);

  return (
    <Container>
      <Title>Kalos time manager</Title>
      <Button onClick={handlePhaseUp}>Phase Up</Button>
      <KDescription key={phase} time={time} {...otherProps} />
      <Wrapper>
        <KTimers />
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 80%;
  max-width: 60rem;
  margin: 2rem auto;
  border-radius: 8px;
  color: #e1d8f0;
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
  margin: 0.5rem;
`;
