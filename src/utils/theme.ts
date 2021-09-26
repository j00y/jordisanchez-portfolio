const SELECTED_MODE = "selected-mode";
export function setSelectedMode(mode: string): void {
  localStorage.setItem(SELECTED_MODE, mode);
}

export function removeSelectedMode(): void {
  localStorage.removeItem(SELECTED_MODE);
}

export function getAccessToken(): string | null {
  return localStorage.getItem(SELECTED_MODE);
}

export function isLightMode(): boolean {
  return localStorage.getItem(SELECTED_MODE) === "light";
}

export function modeHasBeenSet(): boolean {
    return localStorage.getItem(SELECTED_MODE) !== null;
  }
