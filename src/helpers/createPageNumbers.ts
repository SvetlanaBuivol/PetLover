export const createPageNumbers = (
  isMobile: boolean,
  currentPage: number,
  totalPages: number
) => {
  const pages: (number | "...")[] = [];

  if (isMobile && totalPages <= 2) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  if (!isMobile && totalPages <= 3) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  if (isMobile) {
    if (currentPage === 1) {
      pages.push(1, 2, "...");
    } else if (currentPage === totalPages) {
      pages.push("...", totalPages - 1, totalPages);
    } else {
      pages.push("...", currentPage, "...");
    }
  } else {
    if (currentPage === 1) {
      pages.push(1, 2, 3, "...");
    } else if (currentPage === totalPages) {
      pages.push("...", totalPages - 2, totalPages - 1, totalPages);
    } else {
      const start = Math.max(1, currentPage - 1);
      const end = Math.min(totalPages, currentPage + 1);

      if (start > 1) pages.push("...");
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (end < totalPages) pages.push("...");
    }
  }

  return pages;
};
