import styled from "styled-components";
import { PageProps } from "./PageProps";

interface PageContainerProps {
  noPadding?: PageProps["noPadding"];
  backgroundColor?: PageProps["backgroundColor"];
}

interface PageWrapperProps {
  backgroundColor?: PageProps["backgroundColor"];
  // onePage?: boolean
}
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-wrap: wrap;
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  max-width: 100rem;
  transition: background-color 0.2s ease-in-out;
  background-color: ${(props: PageContainerProps) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  padding: ${(props: PageContainerProps) => (props.noPadding ? 0 : 5)}rem;
  @media (max-width: 768px) {
    padding: ${(props: PageContainerProps) => (props.noPadding ? 0 : 3)}rem;
  }
  @media (max-width: 480px) {
    padding: ${(props: PageContainerProps) => (props.noPadding ? 0 : 2)}rem;
  }
`;

export const PageWrapper = styled.div`
  width: 100%;
  transition: background-color 0.2s ease-in-out;
  background-color: ${(props: PageWrapperProps) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  display: flex;
  justify-content: center;
`;

export const PageTitle = styled.div`
  transition: color 0.2s ease-in-out;
  font-weight: 700;
  font-size: 3rem;
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const PageChildren = styled.div`
  margin-top: 1rem;
`;
