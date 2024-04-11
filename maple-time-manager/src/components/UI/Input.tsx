import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 1rem;
  label {
    display: block;
    font-size: 0.85rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
    color: #d3cedc;
    text-transform: uppercase;
  }
  input {
    width: 100%;
    max-width: 35rem;
    font: inherit;
    font-size: 1.25rem;
    border: 1px solid #d3cedc;
    border-radius: 4px;
    padding: 0.5rem;
  }
`;
