import { useHistory } from "react-router";
import { ColorPalette } from "../../theme/theme";
import { MagicLabel } from "../MagicLabel";
import { PageProps } from "./PageProps";
import { PageContainer } from "./styles";

export const Page = (props: PageProps) => {
  const { children, title } = props;
  const history = useHistory();

  const handleReturn = () => {
    history.goBack();
  };
  return (
    <PageContainer>
      <>
        {title && (
          <MagicLabel
            label={title}
            labelColor={ColorPalette.primary}
            magicWord="Back"
            size="small"
            animation={false}
            onClick={handleReturn}
          />
        )}
        {title && <div></div>}
        {children}
      </>
    </PageContainer>
  );
};
