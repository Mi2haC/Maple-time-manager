import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import styled from "styled-components";

export default function MainHeader() {
  return (
    <>
      <Header>
        <h1>ReactMentoring</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kalos"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Kalos
              </NavLink>
            </li>
            <li>
              <Button>Sample</Button>
            </li>
          </ul>
        </nav>
      </Header>
    </>
  );
}

const Header = styled.header`
  width: 80%;
  max-width: 80rem;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin: 0;
    font-size: 1.5rem;
    color: #cebfe7;
  }
  nav ul {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }
  a {
    text-decoration: none;
    color: #c6a8f5;
    padding: 0.25rem 0;
    border-bottom: 2px solid transparent;
  }
  a:hover,
  a:active,
  a.active {
    border-color: #c6a8f5;
  }
`;
