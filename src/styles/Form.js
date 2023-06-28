import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  display: block;
  padding: 0.4rem;
  font-size: 1.2rem;
  margin: 1.2rem 0;
  font-family: "Fira Code", monospace;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  background-color: ${(props) => props.color || "#333"};
  color: #fff;
  display: block;
  /* width: 100%; */
  font: inherit;
  cursor: pointer;
  padding: 8px;
  width: 100%;
  border: none;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;

  &:hover {
    background-color: #595959;
  }
`;
