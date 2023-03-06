import { useEffect, useState } from "react";

interface CallArgs {
  contentType: string;
}

const useContentful = (args: CallArgs) => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(undefined);
    if (args.contentType !== "carbonRoadmap")
      console.warn("useContentful only allows carbon roadmap content type atm");

    (async () => {
      const response = await fetch(`https://content.carbon.network/contentful/master/${args.contentType}`);
      const result = await response.json();

      setData(result);
    })().catch(console.error);
  }, [args.contentType]);

  return { data };
};

export default useContentful;
