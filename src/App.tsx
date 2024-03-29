import { MainLayout } from "@carbon-info/layout";
import { MuiThemeProvider } from "@material-ui/core/styles";
import React, { Suspense } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { theme } from "./@carbon-info/theme";
import "./App.css";

import { GoogleAnalytics } from "@carbon-info/components";

//Lazy loading Components to improve performance
const RoadMapPage = React.lazy(() => import("@carbon-info/views/RoadMapPage/RoadMapPage"));
const Hero = React.lazy(() => import("@carbon-info/views/Hero/Hero"));
const Data = React.lazy(() => import("@carbon-info/views/Data/Data"));
const Features = React.lazy(() => import("@carbon-info/views/Features/Features"));
const Ecosystem = React.lazy(() => import("@carbon-info/views/Ecosystem/Ecosystem"));
const RoadMap = React.lazy(() => import("@carbon-info/views/RoadMap/RoadMap"));
const Secured = React.lazy(() => import("@carbon-info/views/Secured/Secured"));
const Comparison = React.lazy(() => import("@carbon-info/views/Comparison/Comparison"));
const Partnership = React.lazy(() => import("@carbon-info/views/Partnership/Partnership"));
const Build = React.lazy(() => import("@carbon-info/views/Build/Build"));
const Socials = React.lazy(() => import("@carbon-info/views/Socials/Socials"));

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
            <Route path="/partnerships">
              <Suspense fallback={<div style={{ height: "100vh" }} />}>
                <Partnership />
              </Suspense>
            </Route>
            <Route path="/">
              <>
                <Suspense fallback={<div style={{ height: "100vh" }} />}>
                  <Hero />
                  <Data />
                  <Features />
                  <Ecosystem />
                  <RoadMap />
                  <Secured />
									<Comparison />
                  <Build />
                  <Socials />
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
