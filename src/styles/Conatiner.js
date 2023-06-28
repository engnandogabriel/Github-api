import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  width: ${(props) => props.width || "850px"};
  margin: 16px auto;

  a {
    width: 100%;
  }

  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
`;
