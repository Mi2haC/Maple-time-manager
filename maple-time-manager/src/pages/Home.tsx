import styled from "styled-components";
import kalosImg from "../assets/kalos-soul.webp";
import Button from "../components/UI/Button";

export default function HomePage() {
  return (
    <Container>
      <Title>Update history</Title>
      <Wrapper>
        <Icon src={kalosImg} alt="Kalos soul" />
        <Inner>
          <InnerTitle>24/04/10: Kalos</InnerTitle>
          <Description>Manage: laser, arrows, breath, gimic</Description>
          <Button to={"kalos"}>Jump</Button>
        </Inner>
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 80%;
  min-width: 40rem;
  max-width: 60rem;
  margin: 2rem auto;
  /* border-radius: 8px; */
  color: white;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 2rem;
  color: #e1d8f0;
`;

const Wrapper = styled.section`
  display: flex;
  gap: 2rem;
  margin: 3rem 0;
  /* border-color: white;
  border-style: solid;
  border-radius: 1rem; */
`;

const Icon = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: contain;
  margin: auto 0;
`;

const Inner = styled.div`
  margin: 1rem;
`;

const InnerTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #c7b0ee;
`;

const Description = styled.p`
  max-width: 60ch;
  margin: 2rem 0;
  font-size: 1.25rem;
  color: #d5cbe7;
`;
