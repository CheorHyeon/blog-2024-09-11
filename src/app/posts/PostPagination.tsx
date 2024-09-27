"use client";

import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useState } from "react";
import { Post } from "@/types/post";
/*
    data : 전체 데이터
    contentsPerPage : 한 페이지당 보여줄 개수
    pagesPerGroup : 하나의 그룹당 포함될 페이지 수
*/

export default function PostPagination({
  data,
  contentsPerPage,
  pagesPerGroup,
}: {
  data: { [key: number]: Post };
  contentsPerPage: number;
  pagesPerGroup: number;
}) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentPageGroup, setCurrentPageGroup] = useState<number>(1);

  const indexOfLastContent = currentPage * contentsPerPage;
  const indexOfFirstContent = indexOfLastContent - contentsPerPage;

  const postsObjectToArr = Object.values(data); // obj -> arr 변환

  // 현재 페이지 보여줄 데이터 추출
  const currentPageData = postsObjectToArr
    .reverse()
    .slice(indexOfFirstContent, indexOfLastContent);

  // 전체 페이지 계산
  const totalPagesCount = Math.ceil(postsObjectToArr.length / contentsPerPage);

  // 그룹 내의 페이지 번호 계산
  const startPage = (currentPageGroup - 1) * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPagesCount);

  const pageNumbers = genPages(startPage, endPage);

  // 페이지 변경
  const pageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // 그룹 변경
  const changeGroup = (direction: number) => {
    if (currentPageGroup === 1 && direction === -1) {
      return;
    }
    setCurrentPageGroup((prevGroup) => prevGroup + direction);
  };

  const currentPagePostListItems = [];

  for (const post of currentPageData) {
    currentPagePostListItems.push(
      <Card className="relative" key={post.id}>
        <Link href={`/posts/${post.id}`} className="absolute inset-0"></Link>
        <CardHeader>
          <CardTitle>
            {post.id} : {post.title}
          </CardTitle>
          <CardDescription>
            {post.subTitle}

            <br />

            {post.tagLinks.map(({ tag, link }, index) => (
              <span key={index} className="mr-2">
                <Link className="relative" href={link}>
                  #{tag}
                </Link>
              </span>
            ))}
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <>
      <div className="my-4 px-4 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentPagePostListItems}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            {currentPageGroup > 1 && (
              <PaginationPrevious
                onClick={() => changeGroup(-1)}
                className="cursor-pointer"
              >
                이전 그룹
              </PaginationPrevious>
            )}
            {pageNumbers.map((number) => (
              <PaginationLink
                className="cursor-pointer"
                isActive={currentPage === number}
                key={number}
                onClick={(e) => {
                  e.preventDefault();
                  pageChange(number);
                }}
              >
                {number}
              </PaginationLink>
            ))}
            {endPage < totalPagesCount && (
              <PaginationNext
                onClick={() => changeGroup(1)}
                className="cursor-pointer"
              >
                다음 그룹
              </PaginationNext>
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

const genPages = (startPage: number, endPage: number) => {
  const pageNumberArr = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumberArr.push(i);
  }
  return pageNumberArr;
};
