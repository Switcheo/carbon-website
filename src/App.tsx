import React from "react";
import { MainLayout } from "@carbon-info/layout";
import {
  FeatureCard,
  HeroImage, IntroPage,
  UtilitySection, DecentralizedStats,
  Permissionless, Community, Partnership,
  RoadMap, GetInvolved,
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

import { ContentfulClient, ContentfulProvider } from "react-contentful";
const contentfulClient: any = ContentfulClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN!,
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID!,
});

function App() {
  return (
    <Router>
      <ContentfulProvider client={contentfulClient}>
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
                </>
              </Route>
            </Switch>
          </MainLayout>
        </MuiThemeProvider>
      </ContentfulProvider>
    </Router>
  );
}

export default App;