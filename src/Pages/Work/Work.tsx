import { useTheme } from "@material-ui/core";
import { Page } from "../../components/Page";
import { ColorPalette, Colors } from "../../theme/theme";
import { WorkContainer } from "./styles";

export const Work = () => {
  const theme = useTheme();

  return (
    <Page
      title="Work."
      backgroundColor={
        theme.palette.type === "light"
          ? Colors.lightFluorGreen
          : ColorPalette.primary
      }
    >
      <WorkContainer>
        <div>This is gonna be Works content</div>
        <div>This is gonna be Works content</div>
        <div>This is gonna be Works content</div>
      </WorkContainer>
    </Page>
  );
};
