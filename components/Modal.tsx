import React from "react";
import { ReactElement } from "react";
import {
  Button,
  Modal as ModalChakara,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import Plyr from "plyr-react";
import PlayerVideo from "./PlayerVideo";
export interface ModalProps {
  title: string;
  //   Component: any;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  videoSrc: Plyr.SourceInfo;
}

export default function Modal({
  title,

  videoSrc,
  isOpen,
  onOpen,
  onClose,
}: ModalProps) {
  return (
    <>
      <ModalChakara isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Component /> */}
            <PlayerVideo videoSrc={videoSrc} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalChakara>
    </>
  );
}
