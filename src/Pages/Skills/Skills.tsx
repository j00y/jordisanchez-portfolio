import { LinearProgress, useTheme } from "@material-ui/core";
import { Page } from "../../components/Page";
import { ColumnHeader, SkillsContainer } from "./styles";

export const Skills = () => {
  const theme = useTheme();

  const getProgressBarColor = () => {
    if (theme.palette.type === "light") return "secondary";
    return "primary";
  };
  return (
    <Page title="Skills.">
      <SkillsContainer>
        <div>
          <ColumnHeader>Stack</ColumnHeader>
          <div>React</div>
          <LinearProgress
            variant="determinate"
            color={getProgressBarColor()}
            value={90}
          />

          <div>Typescript</div>
          <LinearProgress
            variant="determinate"
            color={getProgressBarColor()}
            value={80}
          />

          <div>Node</div>
          <LinearProgress
            variant="determinate"
            color={getProgressBarColor()}
            value={50}
          />

          <div>Webpack</div>
          <LinearProgress
            variant="determinate"
            color={getProgressBarColor()}
            value={60}
          />
        </div>
        <div>
          <ColumnHeader>Expertise</ColumnHeader>
          <div>Artistic Solutions</div>
          <div>Creative Ideas</div>
          <div>Team Work</div>
          <div>Ui/Ux Design</div>
        </div>
        <div>
          <ColumnHeader>Languages</ColumnHeader>This is gonna be Works content
        </div>
      </SkillsContainer>
    </Page>
  );
};
