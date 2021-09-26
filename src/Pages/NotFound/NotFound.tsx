import { useState } from "react";
import { useHistory } from "react-router";
import { MagicLabel } from "../../components/MagicLabel";
import { Page } from "../../components/Page";
import { Routes } from "../../routes/routes";
import { ColorPalette } from "../../theme/theme";
import { MobileToggle } from "../Home/styles";
import { NotFoundContainer } from "./styles";

export const NotFound = () => {
  const [forceMenu, setForceMenu] = useState(false);
  const history = useHistory();
  const toogleForceMenu = () => {
    if (document.body.offsetWidth < 768) {
      setForceMenu(!forceMenu);
    }
  };

  const handleRedirectToHome = () => {
    history.push(Routes.HOME);
  };
  return (
    <Page>
      <NotFoundContainer onClick={toogleForceMenu}>
        <MagicLabel
          label="Nothing to see here"
          magicWord="Back home"
          labelColor={ColorPalette.primary}
          showMagicWord={forceMenu}
          onClick={handleRedirectToHome}
          size="small"
        />
        <MobileToggle>Tap anywhere</MobileToggle>
      </NotFoundContainer>
    </Page>
  );
};
