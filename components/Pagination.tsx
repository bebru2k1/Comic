import { Box, Button } from "@chakra-ui/react";
import * as React from "react";

export interface PaginationProps {
  totalPage: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

export default function Pagination({
  totalPage,
  currentPage,
  setCurrentPage,
}: PaginationProps) {
  const handleNumber = (number: number, min: number, max: number) => {
    if (number < min) number = min;
    if (number > max) number = max;
    return number;
  };
  return (
    <Box d="flex" mb={10} mt={10}>
      <Box
        cursor="pointer"
        ml={2}
        py={2}
        px={4}
        borderRadius={3}
        bg="gray.700"
        onClick={() =>
          setCurrentPage(handleNumber(currentPage - 1, 1, totalPage))
        }
        {...(currentPage === 1 && "_disabled")}
        isActive={false}
        outline="none"
      >
        Prev
      </Box>
      {currentPage !== 1 && (
        <Box
          cursor="pointer"
          ml={2}
          py={2}
          px={4}
          width={10}
          height={10}
          borderRadius={3}
          bg="gray.700"
          onClick={() =>
            setCurrentPage(handleNumber(currentPage - 1, 1, totalPage))
          }
        >
          {currentPage - 1}
        </Box>
      )}
      <Box
        cursor="pointer"
        ml={2}
        py={2}
        px={4}
        borderRadius={3}
        bg="gray.500"
        onClick={() => setCurrentPage(handleNumber(currentPage, 1, totalPage))}
      >
        {currentPage}
      </Box>
      <Box
        cursor="pointer"
        ml={2}
        py={2}
        px={4}
        borderRadius={3}
        bg="gray.700"
        onClick={() =>
          setCurrentPage(handleNumber(currentPage + 1, 1, totalPage))
        }
      >
        {currentPage + 1}{" "}
      </Box>
      <Box
        cursor="pointer"
        ml={2}
        py={2}
        px={4}
        borderRadius={3}
        bg="gray.700"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </Box>
    </Box>
  );
}
