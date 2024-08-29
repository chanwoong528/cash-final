//@ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import "./pagination.scss"

const PaginationDefault = ({ paginationData, totalPages }) => {
  const { pageNumber, pageSize, paged, unpaged } = paginationData;
  const [currentPage, setCurrentPage] = useState(pageNumber + 1);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    if (paged) {
      setCurrentPage(pageNumber + 1);
    } else if (!unpaged) {
      setCurrentPage(1);
    }
  }, [pageNumber, paged, unpaged]);

  const onClickPageNum = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);

      if (searchParams.get('gubun') !== undefined && searchParams.get('gubun') !== null) {
        router.push(
          `${pathname}?gubun=${searchParams.get("gubun") ? searchParams.get("gubun") : ""
          }&cpage=${pageNumber}`
        );
      } else if (searchParams.get('categCd_lvl2') !== undefined) {
        router.push(
          `${pathname}?categCd=${searchParams.get("categCd") ? searchParams.get("categCd") : ""
          }&categCd_lvl2=${searchParams.get("categCd_lvl2") ? searchParams.get("categCd_lvl2") : ""
          }&brandId=${searchParams.get("brandId") ? searchParams.get("brandId") : ""
          }&cpage=${pageNumber}`
        );
      } else {
        router.push(
          `${pathname}?categCd=${searchParams.get("categCd") ? searchParams.get("categCd") : ""
          }&cpage=${pageNumber}`
        );
      }
      router.refresh();
    }
  };

  const renderPagination = () => {
    const maxPageNumber = totalPages;
    const currentPageIndex = currentPage - 1;
    const startPage = Math.max(currentPageIndex - 2, 0);
    const endPage = Math.min(startPage + 4, maxPageNumber - 1);
    const pageNumbers = Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index + 1
    );
    return (
      <ul className="pagination-list">
        {pageNumbers.map((pageNumber) => {
          return (
            <li
              key={pageNumber}
              className={pageNumber === currentPage ? "on" : ""}
            >
              <button type="button" onClick={() => onClickPageNum(pageNumber)}>
                {pageNumber}
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      {totalPages > 1 && (
        <nav className="pagination-con">
          <button
            className="paginate_btn paginate_btn-first"
            disabled={currentPage === 1}
            type="button"
            onClick={() => {
              onClickPageNum(1);
            }}
          >
            Go to first page
          </button>
          <button
            className="paginate_btn paginate_btn-prev"
            disabled={currentPage === 1}
            type="button"
            onClick={() => {
              onClickPageNum(currentPage - 1);
            }}
          >
            Go to prev page
          </button>
          {renderPagination()}

          <button
            className="paginate_btn paginate_btn-next"
            disabled={currentPage === totalPages}
            type="button"
            onClick={() => {
              onClickPageNum(currentPage + 1);
            }}
          >
            Go to next page
          </button>
          <button
            className="paginate_btn paginate_btn-last"
            disabled={currentPage === totalPages}
            type="button"
            onClick={() => {
              onClickPageNum(totalPages);
            }}
          >
            Go to last page
          </button>
        </nav>
      )}
    </>
  );
};

export default PaginationDefault;
