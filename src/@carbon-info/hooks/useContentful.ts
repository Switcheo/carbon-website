import { useEffect, useState } from "react";

interface CallArgs {
  contentType: string;
}

const useContentful = (args: CallArgs) => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(undefined);

    (async () => {
      // increase the limit otherwise default is 10
      const response = await fetch(`https://content.carbon.network/contentful/master/${args.contentType}?limit=100`);
      const result = await response.json();
      setData(result);
    })().catch(console.error);
  }, [args.contentType]);

  return { data };
};

export default useContentful;
