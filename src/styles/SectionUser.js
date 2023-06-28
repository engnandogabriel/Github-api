import styled from "styled-components";

export const SectionUser = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  ul {
    list-style: none;
  }

  .user-geral {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
