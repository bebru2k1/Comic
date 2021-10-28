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
    <Box m="0 auto" mt={20}>
      <Button
        onClick={() =>
          setCurrentPage(handleNumber(currentPage - 1, 1, totalPage))
        }
        {...(currentPage === 1 && "_disabled")}
        isActive={false}
        outline="none"
      >
        Prev
      </Button>
      {currentPage !== 1 && (
        <Button
          onClick={() =>
            setCurrentPage(handleNumber(currentPage - 1, 1, totalPage))
          }
        >
          {currentPage - 1}
        </Button>
      )}
      <Button
        onClick={() => setCurrentPage(handleNumber(currentPage, 1, totalPage))}
      >
        {currentPage}
      </Button>
      <Button
        onClick={() =>
          setCurrentPage(handleNumber(currentPage + 1, 1, totalPage))
        }
      >
        {currentPage + 1}{" "}
      </Button>
      <Button onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
    </Box>
  );
}
