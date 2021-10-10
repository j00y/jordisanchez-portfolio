import { useTheme } from "@material-ui/core";
import { Page } from "../../components/Page";
import { ColorPalette, Colors } from "../../theme/theme";
import { INTERESTS_INFO, PERSONALITY_INFO } from "./about-data";
import {
  AboutContainer,
  AboutDetailContent,
  ColumnHeader,
  InterestContent,
} from "./styles";
import { getThemeBackgroundColor, getThemeColor } from "../../utils/styles";

export const About = () => {
  const theme = useTheme();

  const renderPersonality = () => {
    return (
      <AboutDetailContent>
        {PERSONALITY_INFO.map((personality) => {
          const color =
            personality.variant === "dark"
              ? getThemeBackgroundColor(theme)
              : getThemeColor(theme);
          return <div style={{ color }}>{personality.title}</div>;
        })}
      </AboutDetailContent>
    );
  };

  const renderInterests = () => {
    return (
      <AboutDetailContent>
        {INTERESTS_INFO.map((interest) => {
          const Icon = interest.icon;
          const color =
            interest.variant === "dark"
              ? getThemeBackgroundColor(theme)
              : getThemeColor(theme);
          return (
            <InterestContent>
              <Icon style={{ fontSize: 60, color, textAlign: "center" }} />
              <div style={{ color }}>{interest.title}</div>
            </InterestContent>
          );
        })}
      </AboutDetailContent>
    );
  };

  return (
    <Page
      backgroundColor={
        theme.palette.type === "light"
          ? Colors.lightFluorGreen
          : ColorPalette.primary
      }
      title="About"
    >
      <div>
        An electronic engineer graduate from the Universitat Politécnica de
        Catalunya, Barcelona, and Master student of Industrial Organization.
      </div>
      <div style={{ opacity: 0.7, margin: "2rem 0" }}>
        I’ve been always interested in graphic design and coding, which makes me
        become a frontend developer lover, passionate about make the user feel a
        comfortble, unique and intuitive experience.
      </div>
      <AboutContainer style={{marginBottom: '5rem'}}>
        <div>
          <ColumnHeader>Personality</ColumnHeader>
          {renderPersonality()}
        </div>
        <div>
          <ColumnHeader>Interests</ColumnHeader>
          {renderInterests()}
        </div>
        {/* <div>
          <ColumnHeader>Education</ColumnHeader>
          {renderLanguages()}
        </div> */}
      </AboutContainer>
    </Page>
  );
};
