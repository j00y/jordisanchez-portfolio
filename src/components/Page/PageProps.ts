import { ReactElement } from "react";

export interface PageProps {
    children?: ReactElement | ReactElement[]
    title?: ReactElement | string
    noPadding?: boolean;
    backgroundColor?: string;
}