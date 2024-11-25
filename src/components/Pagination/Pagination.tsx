import { FC } from "react";
import {
  ArrowsButton,
  Box,
  Button,
  Ellipsis,
  NumbersButton,
} from "./Pagination.styled";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const createPageNumbers = () => {
    const pages: (number | "...")[] = [];

    if (currentPage === 1) {
      pages.push(1, 2, "...");
    } else if (currentPage === totalPages) {
      pages.push("...", currentPage - 1, currentPage);
    } else {
      pages.push(currentPage - 1, currentPage, "...");
    }

    return pages;
  };

  const pages = createPageNumbers();

  if (totalPages <= 1) {
    return null;
  }

  return (
    <Box>
      <ArrowsButton $isLeft={true}>
        <Button
          onClick={() => onPageChange(1)}
          $isDouble={true}
          disabled={currentPage === 1}
        >
          <svg>
            <use xlinkHref="svg/svgSprite.svg#icon-arrow"></use>
          </svg>
          <svg>
            <use xlinkHref="svg/svgSprite.svg#icon-arrow"></use>
          </svg>
        </Button>
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg>
            <use xlinkHref="svg/svgSprite.svg#icon-arrow"></use>
          </svg>
        </Button>
      </ArrowsButton>

      <NumbersButton>
        {pages.map((page, index) =>
          typeof page === "number" ? (
            <Button
              key={index}
              $isActive={page === currentPage}
              onClick={() => onPageChange(page)}
            >
              {page}
            </Button>
          ) : (
            <Ellipsis key={index}>...</Ellipsis>
          )
        )}
      </NumbersButton>

      <ArrowsButton>
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <svg>
            <use xlinkHref="svg/svgSprite.svg#icon-arrow"></use>
          </svg>
        </Button>
        <Button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          $isDouble={true}
        >
          <svg>
            <use xlinkHref="svg/svgSprite.svg#icon-arrow"></use>
          </svg>
          <svg>
            <use xlinkHref="svg/svgSprite.svg#icon-arrow"></use>
          </svg>
        </Button>
      </ArrowsButton>
    </Box>
  );
};

export default Pagination;
