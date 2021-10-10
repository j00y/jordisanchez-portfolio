import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 1024px) {
    gap: 6rem;
  }
`;

export const SkillsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  
  @media (min-width: 1024px) {
    align-items: center;
  }
`;

export const StackTitle = styled.div`
  margin: 1.2rem 0 0.6rem 0;
  @media (min-width: 1024px) {
    text-align: center;
  }
`;

export const ColumnHeader = styled.div`
  transition: color 0.2s ease-in-out;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.6rem;
  margin-bottom: 2rem;
  text-align: inherit;
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
  @media (min-width: 1024px) {
    text-align: center;
  }
`;
