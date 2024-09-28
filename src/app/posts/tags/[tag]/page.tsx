"use client";

import { useState } from "react";
import { posts, postsByTag } from "@/../data/posts";
import { usePathname, useRouter } from "next/navigation"; // next/navigation에서 가져오기
import PostPagination from "../../PostPagination";
import TagList from "@/components/posts/TagList";
import SearchBar from "@/components/posts/SearchBar";

export default function PostListByTag() {
  const pathname = usePathname(); // 현재 경로 가져오기
  let tag = decodeURIComponent(pathname.split("/").pop() || ""); // 마지막 부분에서 태그 추출 및 디코딩
  tag = tag.replace(/-/g, " ");
  tag = tag.toUpperCase(); // 대문자로 변환
  const router = useRouter(); // useRouter 훅 사용

  const contentsPerPage = 3; // 한 페이지당 보여줄 개수
  const pagesPerGroup = 3; // 하나의 그룹당 포함될 페이지 수

  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태
  const [filteredPosts, setFilteredPosts] = useState(postsByTag[tag]); // 필터링된 게시글 상태
  const [selectedTag, setSelectedTag] = useState(tag); // 선택된 태그 상태

  // 모든 태그 가져오기
  const tags = Object.keys(postsByTag);
  // 전체 게시글 수 계산
  let totalPostCount = Object.keys(posts).length;

  /*
    - SearchBar 에서 "/posts" 에 보내는 것은 실제 검색 조건
    - (공통 작업) 해당 컴포넌트에서 searchTerm으로 검색 조건을 저장
      - handleSearch 메서드 호출 시 해당 조건으로 redirect
  */

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 검색어를 쿼리 파라미터로 포함하여 /posts로 리다이렉트
    const transSearchTerm = searchTerm.replace(/ /g, "+"); // 공백을 +기호로 으로 변환
    router.push(`/posts?search=${transSearchTerm}`);
  };

  return (
    <>
      <TagList
        tags={tags}
        selectedTag={selectedTag}
        totalPostCount={totalPostCount}
      />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
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
