import React from "react";
import { MainLayout } from "@carbon-info/layout";
import {
  // FeatureCard,
  // HeroImage, IntroPage,
  // UtilitySection, DecentralizedStats,
  // Permissionless, Community, Partnership,
  // RoadMap, GetInvolved, RecieveUpdates, 
  RoadMapPage,
} from "@carbon-info/views";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./@carbon-info/theme";
import "./App.css";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <MainLayout>
        <RoadMapPage />
        {/* <IntroPage />
        <HeroImage />
        <FeatureCard />
        <UtilitySection />
        <Permissionless />
        <DecentralizedStats />
        <Community />
        <Partnership />
        <RoadMap />
        <GetInvolved />
        <RecieveUpdates /> */}
      </MainLayout>
    </MuiThemeProvider>
  );
}

export default App;