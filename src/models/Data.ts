import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export interface Data {
  title: string;
  value?: number;
  opacity?: number;
  helper?: string;
  variant?: "dark" | "light";
}

export interface Education extends Data {
  location?: string;
  date?: string;
}

export interface Interest extends Data {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}
