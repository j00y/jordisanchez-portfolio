import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 20px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  font-weight: 300;
  font-size: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;
