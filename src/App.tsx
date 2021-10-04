import React from "react";
import { MainLayout } from "@carbon-info/layout";
import {
  IntroPage,
} from "@carbon-info/views";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./@carbon-info/theme";
import "./App.css";
import {
  BrowserRouter as Router,
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
            <IntroPage />
          </MainLayout>
        </MuiThemeProvider>
      </ContentfulProvider>
    </Router>
  );
}

export default App;