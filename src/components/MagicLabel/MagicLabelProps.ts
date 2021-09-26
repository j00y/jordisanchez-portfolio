import { ReactElement } from "react";

export interface MagicLabelProps {
  label: string | ReactElement;
  labelColor?: string;
  magicWordColor?: string;
  opacityLabel?: boolean;
  magicWord: string | ReactElement;
  onClick?: () => void;
  showMagicWord?: boolean;
  padding?: string;
  animation?: boolean;
  animationDelay?: number;
  size?: 'big' | 'small';
}
