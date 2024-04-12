import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";
import Timer from "./Timer";

export default function Timers() {
  const { timers } = useAppSelector((state) => state.timer);
  return (
    <StyledUL>
      {timers.map((timer) => (
        <StyledLI key={timer.name}>
          <Timer {...timer} />
        </StyledLI>
      ))}
    </StyledUL>
  );
}

const StyledUL = styled.ul`
  list-style: none;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 0;
  font-family: "Handjet", sans-serif;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 12rem));
`;

const StyledLI = styled.li`
  background: linear-gradient(#a3a177, #8f8c5d);
  padding: 1rem;
  border-radius: 6px;
  color: #e1d8f0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
