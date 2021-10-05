import { useTheme } from "@material-ui/core";
import { Page } from "../../components/Page";
import { ColorPalette, Colors } from "../../theme/theme";

export const About = () => {
  const theme = useTheme();

  return (
    <Page
      backgroundColor={
        theme.palette.type === "light"
          ? Colors.lightFluorGreen
          : ColorPalette.primary
      }
      title="About."
    >
      <div>
        An electronic engineer graduate from the Universitat Politécnica de
        Catalunya, Barcelona, and Master student of Industrial Organization.
      </div>
      <div>
        I’ve been always interested in graphic design and coding, which makes me
        become a frontend developer lover, passionate about make the user feel a
        comfortble, unique and intuitive experience.
      </div>
    </Page>
  );
};
