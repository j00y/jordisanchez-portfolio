import { Education, Interest } from "../../models";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import CodeIcon from "@material-ui/icons/Code";
import GestureIcon from "@material-ui/icons/Gesture";

export const EDUCATION_INFO: Education[] = [
  {
    title: "Electronic Engineering",
    location: "Universitat Politécnica de Catalunya",
    date: "Present",
  },
  {
    title: "Automatische Industrial und Electronik",
    location: "OTH Regensburg",
    date: "2014 to 2015",
  },
  {
    title: "Master in Industrial Organization",
    location: "Universitat Politécnica de Catalunya",
    date: "2010 to 2014",
  },
];

export const PERSONALITY_INFO: Education[] = [
  {
    title: "Friendly",
    opacity: 1,
    variant: 'light',
  },
  {
    title: "Sociable",
    opacity: 0.7,
    variant: 'dark',
  },
  {
    title: "Humorous",
    opacity: 1,
    variant: 'light',

  },
  {
    title: "Open-minded",
    opacity: 0.7,
    variant: 'dark',
  },
  {
    title: "Proactive",
    opacity: 1,
    variant: 'light',

  },
];

export const INTERESTS_INFO: Interest[] = [
  {
    title: "Football",
    icon: SportsSoccerIcon,
    variant: 'dark',
  },
  {
    title: "Coding",
    icon: CodeIcon,
    variant: 'light',
  },
  {
    title: "Graphic Design",
    icon: GestureIcon,
    variant: 'dark',
  },
];
