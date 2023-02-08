import React, { Suspense } from "react";
import { MainLayout } from "@carbon-info/layout";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./@carbon-info/theme";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { GoogleAnalytics } from "@carbon-info/components";
import { DecentralizedStats } from "@carbon-info/views";
import { Data } from "@carbon-info/views/Data";

//Lazy loading Components to improve performance
const FeatureCard = React.lazy(() => import("@carbon-info/views/FeatureCard/FeatureCard"));
const HeroImage = React.lazy(() => import("@carbon-info/views/HeroImage/HeroImage"));
const IntroPage = React.lazy(() => import("@carbon-info/views/IntroPage/IntroPage"));
const UtilitySection = React.lazy(() => import("@carbon-info/views/UtilitySection/UtilitySection"));
const Permissionless = React.lazy(() => import("@carbon-info/views/Permissionless/Permissionless"));
const Community = React.lazy(() => import("@carbon-info/views/Community/Community"));
const Partnership = React.lazy(() => import("@carbon-info/views/Partnership/Partnership"));
const RoadMap = React.lazy(() => import("@carbon-info/views/RoadMap/RoadMap"));
const GetInvolved = React.lazy(() => import("@carbon-info/views/GetInvolved/GetInvolved"));
const RoadMapPage = React.lazy(() => import("@carbon-info/views/RoadMapPage/RoadMapPage"));

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <GoogleAnalytics />
        <MainLayout>
          <Switch>
            <Route path="/roadmap">
              <Suspense fallback={<div style={{ height: "100vh" }} />}>
                <RoadMapPage />
              </Suspense>
            </Route>
            <Route path="/">
              <>
                <Suspense fallback={<div style={{ height: "100vh" }} />}>
                  <IntroPage />
                  <Data />
                  <HeroImage />
                  <FeatureCard />
                  <DecentralizedStats />
                  <UtilitySection />
                  <Permissionless />
                  <Community />
                  <Partnership />
                  <RoadMap />
                  <GetInvolved />
                </Suspense>
              </>
            </Route>
          </Switch>
        </MainLayout>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
