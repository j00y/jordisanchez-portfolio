import { MagicLabel } from "../../components/MagicLabel";
import { Page } from "../../components/Page";
import "./home.css";
import { MobileToggle } from "./styles";
import { useState } from "react";
import { useHistory } from "react-router";
import { Routes } from "../../routes/routes";
import { ColorPalette } from "../../theme/theme";
import { useAppState } from "../../AppContext";
import { About, Skills, Work } from "..";

export const Home = () => {
  const { forceMenu, setForceMenu } = useAppState();
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
    <Page noPadding={true}>
      <div className="home-container" onClick={toogleForceMenu}>
        <div className="home">
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
            animationDelay={0.4}
          />
          <MagicLabel
            label="Jordi"
            magicWord="Work"
            magicWordColor={ColorPalette.primary}
            onClick={() => handleRedirectTo(Routes.WORK)}
            padding="0 7rem 2rem 0"
            showMagicWord={forceMenu}
            animationDelay={0.8}
          />
        </div>
        <MobileToggle>Tap anywhere</MobileToggle>
      </div>
      <About />
      <Skills />
      <Work />
    </Page>
  );
};
