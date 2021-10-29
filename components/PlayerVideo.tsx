import * as React from "react";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
export interface PlayerVideoProps {
  videoSrc: Plyr.SourceInfo;
}

export default function PlayerVideo({ videoSrc }: PlayerVideoProps) {
  return (
    <>
      <Plyr source={videoSrc}></Plyr>
    </>
  );
}
