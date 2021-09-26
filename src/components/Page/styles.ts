import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-wrapp: wrap;
  flex: 1;
  width: 100%;
  padding: 5rem;
  box-sizing: border-box;
  max-width: 100rem;
  @media (max-width: 480px) {
    padding: 1rem;
  }
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;
