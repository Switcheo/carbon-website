import { useContentful } from "@carbon-info/hooks";
import { isWidth } from "@carbon-info/utils/environment";
import { Box, Theme, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { Ideas, Intro, RoadMapTab, RoadMapTabMobile, RoadMapTabTablet } from "./components";

const RoadMapPage: React.FC = () => {
  const classes = useStyles();
  const isTablet = isWidth("sm");
  const isMobile = isWidth("xs");
  const [roadMapItem, setRoadMapItems] = useState<any[]>([]);
  const { data } = useContentful({
    contentType: "carbonRoadmap",
  });

  useEffect(() => {
    if (!data) return;
    async function fetchRoadMapItems() {
      let result: any[] = [];
      const content = await data as any;
      if (content && Array.isArray(content.items)) {
        content.items.forEach((o: any) => {
          let inProgress: any[] = [];
          let completed: any[] = [];
          o?.fields?.entries?.forEach((entry: any) => {
            let data = {
              docLink: entry.fields.link,
              githubLink: entry.fields.githubLink,
              progress: entry.fields.progress,
              status: entry.fields.status,
              title: entry.fields.title,
              description: entry.fields.description.content[0].content[0].value,
              shortDescription: entry.fields.shortDescription,
            };
            if (entry.fields.progress === 100) {
              completed.push({ ...data });
            } else {
              inProgress.push({ ...data });
            }
          });

          inProgress.sort((a, b) => (b.progress - a.progress));
          completed.sort(((a, b) => {
            if (moment(a.lastUpdate) > moment(b.lastUpdate)) {
              return 1;
            }
            return -1;
          }));

          result.push({
            title: o.fields.title,
            description: o?.fields?.description?.content[0]?.content[0]?.value,
            tabs: [...inProgress, ...completed],
          });
        });
      }
      setRoadMapItems(result);
    }
    fetchRoadMapItems();
  }, [data]);

  const RoadMapTabView = isMobile
    ? <RoadMapTabMobile content={roadMapItem} />
    : isTablet
      ? <RoadMapTabTablet content={roadMapItem} />
      : <RoadMapTab content={roadMapItem} />;
  return (
    <div>
      <Box className={classes.container}>
        <Intro />
        {RoadMapTabView}
        <Ideas />
      </Box>
    </div>
  );
};

export default RoadMapPage;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: "0vh 0px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      margin: "0vh 0px",
      padding: "0px 4rem",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0vh 0px",
      padding: "0px 1rem",
    },
  },
}));
