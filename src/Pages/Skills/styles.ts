import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ColumnHeader = styled.div`
  transition: color 0.2s ease-in-out;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.6rem;
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;
