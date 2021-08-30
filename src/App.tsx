import React from "react";
import { MainLayout } from "@carbon-info/layout";
import {
  FeatureCard,
  HeroImage, IntroPage,
  UtilitySection, DecentralizedStats,
  Permissionless, Community, Partnership,
  RoadMap, GetInvolved, RecieveUpdates,
  RoadMapPage,
} from "@carbon-info/views";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./@carbon-info/theme";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <MainLayout>
          <Switch>
            <Route path="/roadmap">
              <RoadMapPage />
            </Route>
            <Route path="/">
              <>
                <IntroPage />
                <HeroImage />
                <FeatureCard />
                <UtilitySection />
                <Permissionless />
                <DecentralizedStats />
                <Community />
                <Partnership />
                <RoadMap />
                <GetInvolved />
                <RecieveUpdates />
              </>
            </Route>
          </Switch>
        </MainLayout>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;