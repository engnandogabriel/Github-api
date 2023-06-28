import styled from "styled-components";

export const Image = styled.img`
  width: ${(props) => props.width || "100px"};
  margin-bottom: 16px;
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.radius || "none"};
`;
