import { Theme } from "@material-ui/core";

export type ClassMap = { [value: string]: boolean };
export const getClassNames = (classMap: ClassMap): string =>
  Object.keys(classMap)
    .filter((styleClass) => classMap[styleClass])
    .join(" ");

export const getThemeColor = (theme: Theme) =>{
  return theme.palette.type === 'light' ? "#190F14" : '#f5f5f5';
}

export const getThemeBackgroundColor = (theme: Theme) =>{
  return theme.palette.type === 'light' ?  theme.palette.primary.light : "#190F14";
}