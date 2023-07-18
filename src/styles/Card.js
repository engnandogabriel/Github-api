import styled from "styled-components";

export const Card = styled.div`
  box-shadow: 0 1.6px 3.6px 0 rgba(0, 0, 0, 0.3),
    0 0.3px 0.9px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
  text-align: ${(props) => props.align || "left"};
  font-family: "Roboto";
  padding: ${(props) => props.padding || "1rem"};
  width: 100%;

  .card-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card-content-text {
    margin-right: 8px;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CardWraper = styled.div`
  width: ${(props) => props.width || "900px"};
  margin: 16px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  background-color: ${(props) => props.background || "#393e42"};
  box-shadow: 1px 1px 10px #ccc;
  gap: 16px;
  padding: 16px;
  border-radius: 16px;

  @media (max-width: 970px) {
    width: 100%;
  }
  @media (max-width: 520px) {
    width: 400px;
  }

  .user {
    margin-top: 16px;
    background-color: #51565b;
    border: 3px solid #fff;
    padding: 16px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 250px;
    width: 100%;
  }
  .user:hover {
    background-color: #3b3f42;
  }
`;

export const CardGrid = styled.div`
  box-shadow: 0 1.6px 3.6px 0 rgba(0, 0, 0, 0.3),
    0 0.3px 0.9px 0 rgba(0, 0, 0, 0.15);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  padding: ${(props) => props.padding || "1rem"};
  width: 100%;

  @media (max-width: 970px) {
    display: flex;
    flex-direction: column;
    padding: 8px;
  }
`;
