import React, { Suspense } from "react";
import { MainLayout } from "@carbon-info/layout";
// import {
//   FeatureCard,
//   HeroImage, IntroPage,
//   UtilitySection, DecentralizedStats,
//   Permissionless, Community, Partnership,
//   RoadMap, GetInvolved,
//   RoadMapPage,
// } from "@carbon-info/views";
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

//Lazy loading Components to improve performance
const FeatureCard = React.lazy(() => import("@carbon-info/views/FeatureCard/FeatureCard"));
const HeroImage = React.lazy(() => import("@carbon-info/views/HeroImage/HeroImage"));
const IntroPage = React.lazy(() => import("@carbon-info/views/IntroPage/IntroPage"));
const UtilitySection = React.lazy(() => import("@carbon-info/views/UtilitySection/UtilitySection"));
const DecentralizedStats = React.lazy(() => import("@carbon-info/views/DecentralizedStats/DecentralizedStats"));
const Permissionless = React.lazy(() => import("@carbon-info/views/Permissionless/Permissionless"));
const Community = React.lazy(() => import("@carbon-info/views/Community/Community"));
const Partnership = React.lazy(() => import("@carbon-info/views/Partnership/Partnership"));
const RoadMap = React.lazy(() => import("@carbon-info/views/RoadMap/RoadMap"));
const GetInvolved = React.lazy(() => import("@carbon-info/views/GetInvolved/GetInvolved"));
const RoadMapPage = React.lazy(() => import("@carbon-info/views/RoadMapPage/RoadMapPage"));

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
                  <Suspense fallback={<div></div>}>
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
                  </Suspense>
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