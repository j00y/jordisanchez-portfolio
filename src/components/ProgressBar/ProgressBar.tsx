import { Divider, LinearProgress, useTheme } from "@material-ui/core";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { Colors } from "../../theme/theme";
import { ProgressBarProps } from "./ProgressBarProps";

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
    },
    colorPrimary: {
      transition: "background-color .2s ease",
    },
    colorSecondary: {
      backgroundColor:
        theme.palette.type === "dark"
          ? theme.palette.secondary
          : Colors.progressSecondaryBackground,
      transition: "background-color .2s ease",
    },
    bar: {
      borderRadius: 4,
      backgroundColor:
        theme.palette.type === "dark"
          ? theme.palette.primary
          : Colors.progressSecondaryGreen,
    },
  })
)(LinearProgress);

const Helper = styled.div`
  font-size: 0.8rem;
  opacity: 0.7;
`;

export const ProgressBar = (props: ProgressBarProps) => {
  const { helper } = props;
  const theme = useTheme();
  const getProgressBarColor = () => {
    if (theme.palette.type === "light") return "secondary";
    return "primary";
  };

  const renderHelper = () => {
    if(!helper){
      return <div style={{height: '18px'}}/>
    }
    return <Helper>{helper}</Helper>
  }

  return (
    <>
      <BorderLinearProgress {...props} color={getProgressBarColor()} />
      {renderHelper()}
    </>
  );
};
