import React from "react";
import { MainLayout } from "@carbon-info/layout";
import {
  FeatureCard,
  HeroImage, IntroPage,
  UtilitySection, DecentralizedStats,
  Permissionless, Community, Partnership, RoadMap,
} from "@carbon-info/views";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./@carbon-info/theme";
import "./App.css";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <MainLayout>
        <IntroPage />
        <HeroImage />
        <FeatureCard />
        <UtilitySection />
        <Permissionless />
        <DecentralizedStats />
        <Community />
        <Partnership />
        <RoadMap />
      </MainLayout>
    </MuiThemeProvider>
  );
}

export default App;