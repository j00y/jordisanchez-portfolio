/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext } from "react";

export interface AppState {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void
}

export const AppContext = createContext<AppState>({} as any);

export const useAppState = () => useContext(AppContext);
