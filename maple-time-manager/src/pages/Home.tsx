import styled from "styled-components";
import studentsImg from "../assets/students.jpg";

export default function HomePage() {
  return (
    <Container>
      <Title>Our Mission: Your Success</Title>
      <Wrapper>
        <Icon src={studentsImg} alt="A group of students" />
        <Inner>
          <InnerTitle>What we do</InnerTitle>
          <Description>
            ReactMentoring is a platform for React developers to find mentors
            who can help them with their React-related questions and problems.
            We are a community of React developers who want to help each other
            succeed.
          </Description>
        </Inner>
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 80%;
  max-width: 60rem;
  margin: 3rem auto;
  border-radius: 8px;
  color: white;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 2.5rem;
  color: #e1d8f0;
`;

const Wrapper = styled.section`
  display: flex;
  gap: 2rem;
  margin: 3rem 0;
`;

const Icon = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: contain;
  border-radius: 50%;
`;

const Inner = styled.div``;

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
