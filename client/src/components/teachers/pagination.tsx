import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function PaginationComponent({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}): React.JSX.Element {
  const router = useRouter();
  const getPageNumbers = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  if (totalPages < currentPage) {
    router.push(`/teachers?page=${totalPages}`);
  }

  const renderPageLinks = () => {
    if (totalPages <= 6) {
      // Render all page links if the total pages are 6 or fewer
      return pageNumbers.map((pageNumber) => (
        <Link
          href={`/teachers?page=${pageNumber}`}
          key={pageNumber}
          className={`px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform rounded-md sm:inline ${
            currentPage === pageNumber
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 hover:text-white hover:bg-blue-500'
          }`}
        >
          {pageNumber}
        </Link>
      ));
    } else {
      // Render "..." in the center
      const leftPages = pageNumbers.slice(0, 2);
      const rightPages = pageNumbers.slice(totalPages - 2, totalPages);

      const links = [];

      if (currentPage !== 1) {
        links.push(
          <Link
            href={`/teachers?page=1`}
            key="first"
            className={`px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform rounded-md sm:inline bg-gray-100 hover:text-white hover:bg-blue-500`}
          >
            1
          </Link>,
        );
      }

      if (leftPages[leftPages.length - 1] < currentPage - 1) {
        links.push(
          <span
            key="left-ellipsis"
            className="px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline bg-gray-100 hover:text-white hover:bg-blue-500"
          >
            ...
          </span>,
        );
      }

      links.push(
        ...pageNumbers.slice(currentPage - 1, currentPage + 2).map((pageNumber) => (
          <Link
            href={`/teachers?page=${pageNumber}`}
            key={pageNumber}
            className={`px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform rounded-md sm:inline ${
              currentPage === pageNumber
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:text-white hover:bg-blue-500'
            }`}
          >
            {pageNumber}
          </Link>
        )),
      );

      if (rightPages[0] > currentPage + 2) {
        links.push(
          <span
            key="right-ellipsis"
            className="px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline bg-gray-100 hover:text-white hover:bg-blue-500"
          >
            ...
          </span>,
        );
      }

      return links;
    }
  };

  return (
    <div className="flex justify-center my-6">
      <Link
        href={`/teachers?page=1`}
        className="flex items-center justify-center px-4 py-2 mx-1 transform rounded-md sm:inline text-gray-700 transition-colors duration-300 bg-gray-100 hover:text-white hover:bg-blue-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </Link>

      {renderPageLinks()}

      <Link
        href={`/teachers?page=${totalPages}`}
        className="flex items-center justify-center px-4 py-2 mx-1 transform rounded-md sm:inline text-gray-700 transition-colors duration-300 bg-gray-100 hover:text-white hover:bg-blue-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
}
