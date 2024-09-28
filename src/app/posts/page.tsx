"use client";

import { useState, useEffect } from "react";
import { posts, postsByTag } from "@/../data/posts";
import PostPagination from "./PostPagination";
import { usePathname, useSearchParams } from "next/navigation";
import TagList from "@/components/posts/TagList";
import SearchBar from "@/components/posts/SearchBar";

export default function PostList() {
  const contentsPerPage = 3; // 한 페이지당 보여줄 개수
  const pagesPerGroup = 3; // 하나의 그룹당 포함될 페이지 수

  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태
  const [inputValue, setInputValue] = useState(""); // 입력 필드의 상태
  const [filteredPosts, setFilteredPosts] = useState(posts); // 필터링된 게시글 상태
  const [selectedTag, setSelectedTag] = useState(""); // 선택된 태그 상태

  // 모든 태그 가져오기
  const tags = Object.keys(postsByTag);

  // 전체 게시글 수 계산
  let totalPostCount = Object.keys(posts).length;

  // URL의 쿼리 파라미터를 읽어서 상태 설정
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    let search = searchParams.get("search") || "";
    search = search.replace(/\+/g, " "); // + 기호를 띄어쓰기로 변환
    setInputValue(search);
    setSearchTerm(search);
  }, []); // 최초에 한번 하고

  // 검색어가 변경될 때마다 필터링 실행
  useEffect(() => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = Object.fromEntries(
      Object.entries(posts).filter(
        ([key, post]) =>
          post.title.toLowerCase().includes(lowercasedTerm) ||
          post.subTitle.toLowerCase().includes(lowercasedTerm) ||
          post.content.toLowerCase().includes(lowercasedTerm)
      )
    );
    setFilteredPosts(filtered); // 필터링된 게시글로 상태 업데이트
  }, [searchTerm]); // 실행 3 - handleSearch 함수로 인해 상태 변경되어 해당 검색어가 들어간 게시글 검색

  // 검색 처리 함수
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 폼 제출 방지
    setSearchTerm(inputValue); // inputValue의 내용을 searchTerm으로 설정
  };

  return (
    <>
      <TagList
        tags={tags}
        selectedTag={selectedTag}
        totalPostCount={totalPostCount}
      />
      <SearchBar
        searchTerm={inputValue}
        setSearchTerm={setInputValue}
        handleSearch={handleSearch}
      />
      <PostPagination
        data={filteredPosts}
        contentsPerPage={contentsPerPage}
        pagesPerGroup={pagesPerGroup}
      ></PostPagination>
    </>
  );
}
