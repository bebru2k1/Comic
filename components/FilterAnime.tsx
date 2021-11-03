import * as React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Flex,
} from "@chakra-ui/react";
export interface FilterAnimeProps {
  handleSubmit: () => void;
}

export default function FilterAnime({ handleSubmit }: FilterAnimeProps) {
  return (
    <Flex align="flex-end" justify="center" mb={5}>
      <FormControl id="title" w={200}>
        <FormLabel>Title</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl id="genres" w={200} ml={5}>
        <FormLabel>Genres</FormLabel>
        <Input type="text" />
      </FormControl>
      <Button colorScheme="red" ml={5}>
        Search
      </Button>
    </Flex>
  );
}
