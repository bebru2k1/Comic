import { Box, Button, Flex } from "@chakra-ui/react";
import * as React from "react";
import { sliceData } from "../data/sliceData";
export interface SlideButtonProps {
  currentIndex: number;
  setCurrentIndex: (params: number) => void;
}

export default function SlideButton({
  currentIndex,
  setCurrentIndex,
}: SlideButtonProps) {
  return (
    <Flex mt={10}>
      {sliceData.map((item, index) => (
        <Button
          key={index}
          width={2}
          height={2}
          colorScheme={currentIndex === item.id ? "red" : "gray"}
          ml={2}
          onClick={() => setCurrentIndex(item.id)}
        />
      ))}
    </Flex>
  );
}
