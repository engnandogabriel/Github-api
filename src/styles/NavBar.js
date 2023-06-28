import styled from "styled-components";

export const NavBar = styled.nav`
  background-color: #393e42;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 2rem;
  z-index: 1;
  border-bottom: 1px solid #eff3f6;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  line-height: 1.6;

  ul {
    display: flex;
    list-style: none;
    gap: 16px;
  }

  a {
    color: #fff;
    padding: 0.45rem;
    margin: 0 0.25rem;
    font-weight: 600;
    text-decoration: none;
    word-break: break-all;
    white-space: nowrap;
    border-bottom: 3px solid transparent;
    transition: 0.2s ease-in-out;
  }
  i {
    margin-right: 12px;
  }

  a:hover {
    border-bottom: 3px solid #fff;
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`;
