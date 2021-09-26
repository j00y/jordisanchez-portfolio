import { useAppState } from "../../AppContext";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';

import "./header.css";
import { setSelectedMode } from "../../utils/theme";

export const Header = () => {
  const { darkMode, setDarkMode} = useAppState()

  const toggleThemeMode = () =>{
    if(darkMode) setSelectedMode('light')
    if(!darkMode) setSelectedMode('dark')
    setDarkMode(!darkMode);
  }
  const renderThemeModeToggle = () => {
    if(darkMode) return <WbSunnyIcon onClick={toggleThemeMode} cursor='pointer'/>
    return <Brightness3Icon onClick={toggleThemeMode} cursor='pointer'/>
  };
  return (
    <div className="header">
      <h1></h1>
      {renderThemeModeToggle()}
    </div>
  );
};
