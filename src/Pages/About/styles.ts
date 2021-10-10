import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const AboutDetailContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 480px) {
    gap: 1.4rem;
  }
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

export const ColumnHeader = styled.div`
  transition: color 0.2s ease-in-out;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.6rem;
  margin-top: 4rem;

  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const InterestContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1.4rem;
  width: 120px;
`;
