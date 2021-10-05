import { Divider } from "@material-ui/core";import { useEffect } from "react";
import { useAppState } from "../../AppContext";
import { PageProps } from "./PageProps";
import { PageChildren, PageContainer, PageTitle, PageWrapper } from "./styles";

export const Page = (props: PageProps) => {
  const { children, title, noPadding, backgroundColor } = props;
  const { setForceMenu } = useAppState();

  useEffect(() => {
    setForceMenu(false);
  }, []);

  return (
    <PageWrapper backgroundColor={backgroundColor}>
      <PageContainer noPadding={noPadding}>
        <>
          {title && <PageTitle>{title}</PageTitle>}
          <PageChildren>{children}</PageChildren>
        </>
      </PageContainer>
    </PageWrapper>
  );
};
