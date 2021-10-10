import { MagicLabel } from "../../components/MagicLabel";
import { Page } from "../../components/Page";
import "./home.css";
import { MobileToggle } from "./styles";
import { useHistory } from "react-router";
import { Routes } from "../../routes/routes";
import { useAppState } from "../../AppContext";
import { About, Skills, Work } from "..";
import { useTheme } from "@material-ui/core";
import { Element, scroller } from "react-scroll";

export const Home = () => {
  const { forceMenu, setForceMenu } = useAppState();
  const theme = useTheme();
  const toogleForceMenu = () => {
    if (document.body.offsetWidth < 768) {
      setForceMenu(!forceMenu);
    }
  };

  const handleScrollTo = (path: string) => {
    const scrollType = {
      duration: 500,
      smooth: true, // linear “easeInQuint” “easeOutCubic”
    };
    scroller.scrollTo(path, scrollType);
  };

  const getMagicColor =
    theme.palette.type === "light"
      ? theme.palette.secondary.light
      : theme.palette.primary.main;
  return (
    <Page noPadding={true}>
      <div className="home-container" onClick={toogleForceMenu}>
        <div className="home">
          <MagicLabel
            label="Hi."
            magicWord="About"
            magicWordColor={getMagicColor}
            opacityLabel={true}
            onClick={() => handleScrollTo(Routes.ABOUT)}
            showMagicWord={forceMenu}
          />
          <MagicLabel
            label="I'm"
            magicWord="Skills"
            magicWordColor={getMagicColor}
            opacityLabel={true}
            onClick={() => handleScrollTo(Routes.SKILLS)}
            showMagicWord={forceMenu}
            animationDelay={0.4}
          />
          <MagicLabel
            label="Jordi"
            magicWord="Work"
            magicWordColor={getMagicColor}
            onClick={() => handleScrollTo(Routes.WORK)}
            padding="0 7rem 2rem 0"
            showMagicWord={forceMenu}
            animationDelay={0.8}
          />
        </div>
        <MobileToggle>Tap anywhere</MobileToggle>
      </div>
      <Element name={Routes.ABOUT}>
        <About />
      </Element>
      <Element name={Routes.SKILLS}>
        <Skills />
      </Element>
      <Element name={Routes.WORK}>
        <Work />
      </Element>
    </Page>
  );
};
