import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header } from "./components/Header";
import { Home, NotFound, About, Work, Skills } from "./Pages";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { ApiOptions, initialize } from "./api/base";
import { AppContext } from "./AppContext";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./theme/theme";
import { isLightMode, modeHasBeenSet } from "./utils/theme";
import { Routes } from "./routes/routes";

const App = () => {
  const getInitialThemeMode = () => {
    if (!modeHasBeenSet()) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return !isLightMode();
  };

  const [darkMode, setDarkMode] = useState(getInitialThemeMode());

  useEffect(() => {
    const apiOtions: ApiOptions = {
      baseUrl: "https://picsum.photos",
    };
    initialize(apiOtions);
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode }}>
      <Router>
        <MuiThemeProvider theme={theme({ darkMode })}>
          <div className={`app-wrapper ${darkMode && "app-wrapper-dark-mode"}`}>
            <Header />
            <Switch>
              <Route exact path={Routes.HOME} component={Home} />
              <Route exact path="/" component={Home} />
              <Route path={Routes.ABOUT} component={About} />
              <Route path={Routes.WORK} component={Work} />
              <Route path={Routes.SKILLS} component={Skills} />
              <Route path={Routes.NOT_FOUND} component={NotFound} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </MuiThemeProvider>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
