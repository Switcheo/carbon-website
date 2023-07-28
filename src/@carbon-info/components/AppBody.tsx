import React, { useRef } from "react";

const IntroPage = React.lazy(() => import("@carbon-info/views/IntroPage/IntroPage"));
const Data = React.lazy(() => import("@carbon-info/views/Data/Data"));
const Features = React.lazy(() => import("@carbon-info/views/Features/Features"));
const Ecosystem = React.lazy(() => import("@carbon-info/views/Ecosystem/Ecosystem"));
const RoadMap = React.lazy(() => import("@carbon-info/views/RoadMap/RoadMap"));
const Secured = React.lazy(() => import("@carbon-info/views/Secured/Secured"));
const Build = React.lazy(() => import("@carbon-info/views/Build/Build"));
const Socials = React.lazy(() => import("@carbon-info/views/Socials/Socials"));

const AppBody: React.FC = () => {
  const socialsRef = useRef<HTMLDivElement>(null);

  const scrollToSocials = () => {
    if (socialsRef.current) {
      socialsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <React.Fragment>
      <IntroPage />
      <button onClick={scrollToSocials}>Scroll to Socials</button>
      <Data />
      <Features />
      <Ecosystem />
      <RoadMap />
      <Secured />
      <Build />
      <div ref={socialsRef}>
        <Socials />
      </div>
    </React.Fragment>
  );
};


export default AppBody;
