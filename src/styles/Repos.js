import styled from "styled-components";

export const Repos = styled.div`
  padding: 12px;
  border-left: 10px solid #0366d6;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: 2px 2px 10px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  a {
    display: inline-block;
    font-size: 20px;
    /* white-space: nowrap; */
    color: #0366d6;
    transition: 0.2s ease;
    margin-bottom: 8px;
  }
  p {
    display: inline;
    margin-bottom: 8px;
  }
  a:hover {
    border-bottom: 2px solid #0366d6;
  }
  div {
    width: 80px;
    display: flex;
    justify-content: space-between;
  }
`;
