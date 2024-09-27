import { posts } from "@/../data/posts";
import PostPagination from "./PostPagination";

export default function PostList() {
  const contentsPerPage = 3; // 한 페이지당 보여줄 개수
  const pagesPerGroup = 3; // 하나의 그룹당 포함될 페이지 수

  return (
    <PostPagination
      data={posts}
      contentsPerPage={contentsPerPage}
      pagesPerGroup={pagesPerGroup}
    ></PostPagination>
  );
}
