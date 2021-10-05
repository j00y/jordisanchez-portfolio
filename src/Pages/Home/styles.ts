import styled from "styled-components";

export const MobileToggle = styled.div`
  width: 100vw;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  padding: 2rem 0;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  animation: movement 1.5s ease-in-out alternate-reverse infinite;
  @keyframes movement {
    0% {
      transform: translateY(0);
    }
    50% {
        transform: translateY(0.5rem);
    }
    100% {
        transform: translateY(0);
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
