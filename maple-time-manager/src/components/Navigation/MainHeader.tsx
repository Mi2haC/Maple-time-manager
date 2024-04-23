import { NavLink } from "react-router-dom";
import styled from "styled-components";
import mapleIcon from "../../assets/mapleIcon.jpg";

export default function MainHeader() {
  return (
    <>
      <Header>
        <img src={mapleIcon} alt="Maplestory icon" />
        <h1>Maplestory time</h1>
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
  /* justify-content: space-between; */
  align-items: center;
  img {
    width: 3rem;
    height: 3rem;
    object-fit: contain;
    border-radius: 50%;
  }
  h1 {
    margin: 0;
    font-size: 1rem;
    color: #cebfe7;
    margin-left: 2rem;
    margin-right: auto;
  }
  nav ul {
    margin-left: 0.5rem;
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
