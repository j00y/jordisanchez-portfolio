import { Box, LinearProgress, useTheme } from "@material-ui/core";
import { Page } from "../../components/Page";
import { ProgressBar } from "../../components/ProgressBar";
import { Data } from "../../models";
import { LANGUAGES_INFO, MOTIVATIONS_INFO, STACKS_INFO } from "./skill-data";
import {
  ColumnHeader,
  SkillsContainer,
  StackTitle,
  SkillsContent,
} from "./styles";

export const Skills = () => {
  const renderStack = () => renderProgressBars(STACKS_INFO)
  const renderLanguages = () => renderProgressBars(LANGUAGES_INFO)

  const renderProgressBars = (info: Data[]) => {
    return info.map((item) => {
      return (
        <>
          <StackTitle style={{ margin: "1.2rem 0 0.6rem 0" }}>
            {item.title}
          </StackTitle>
          <ProgressBar variant="determinate" value={item.value} helper={item.helper}/>
        </>
      );
    });
  };

  const renderMotivations = () => {
    return (
      <SkillsContent>
        {MOTIVATIONS_INFO.map((motivation) => (
          <div style={{ opacity: motivation.opacity }}>{motivation.title}</div>
        ))}
      </SkillsContent>
    );
  };
  return (
    <Page title="Skills">
      <SkillsContainer>
        <div>
          <ColumnHeader>Stack</ColumnHeader>
          {renderStack()}
        </div>
        <div>
          <ColumnHeader>Motivations</ColumnHeader>
          {renderMotivations()}
        </div>
        <div>
          <ColumnHeader>Languages</ColumnHeader>
          {renderLanguages()}
        </div>
      </SkillsContainer>
    </Page>
  );
};
