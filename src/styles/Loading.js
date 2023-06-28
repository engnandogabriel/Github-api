import styled from "styled-components";

export const Load = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-25%, -50%);
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #808080; /* Black */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
`;
