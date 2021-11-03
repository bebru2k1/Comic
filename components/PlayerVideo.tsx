import React from "react";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
export interface PlayerVideoProps {
  videoSrc: Plyr.SourceInfo;
}

function PlayerVideo({ videoSrc }: PlayerVideoProps) {
  console.log(videoSrc);
  const [reRender, setRerender] = React.useState({});
  React.useEffect(() => {
    setRerender({});
  }, [videoSrc]);
  return <Plyr autoPlay={true} source={videoSrc}></Plyr>;
}

export default React.memo(PlayerVideo);
