import * as React from "react";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
export interface PlayerVideoProps {
  videoSrc: Plyr.SourceInfo;
}

function PlayerVideo({ videoSrc }: PlayerVideoProps) {
  console.log("re-render Player");
  return (
    <>
      <Plyr source={videoSrc}></Plyr>
    </>
  );
}

export default React.memo(PlayerVideo);
