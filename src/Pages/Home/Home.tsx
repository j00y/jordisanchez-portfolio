import { MagicLabel } from "../../components/MagicLabel";
import { Page } from "../../components/Page";
import "./home.css";
import { MobileToggle } from "./styles";
import { useState } from "react";
import { useHistory } from "react-router";
import { Routes } from "../../routes/routes";
import { ColorPalette } from "../../theme/theme";

export const Home = () => {
  const [forceMenu, setForceMenu] = useState(false);
  const history = useHistory();
  const toogleForceMenu = () => {
    if (document.body.offsetWidth < 768) {
      setForceMenu(!forceMenu);
    }
  };

  const handleRedirectTo = (path: string) => {
    history.push(path);
  };
  return (
    <Page>
      <div className="home-container" onClick={toogleForceMenu}>
        <MagicLabel
          label="Hi."
          magicWord="About"
          magicWordColor={ColorPalette.primary}
          opacityLabel={true}
          onClick={() => handleRedirectTo(Routes.ABOUT)}
          showMagicWord={forceMenu}
        />
        <MagicLabel
          label="I'm"
          magicWord="Skills"
          magicWordColor={ColorPalette.primary}
          opacityLabel={true}
          onClick={() => handleRedirectTo(Routes.SKILLS)}
          showMagicWord={forceMenu}
          animationDelay={0.2}
        />
        <MagicLabel
          label="Jordi"
          magicWord="Work"
          magicWordColor={ColorPalette.primary}
          onClick={() => handleRedirectTo(Routes.WORK)}
          padding="0 7rem 2rem 0"
          showMagicWord={forceMenu}
          animationDelay={0.4}
        />
      </div>
      <MobileToggle>Tap anywhere</MobileToggle>
    </Page>
  );
};
