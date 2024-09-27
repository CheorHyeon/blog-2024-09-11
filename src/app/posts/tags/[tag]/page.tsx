import { postsByTag } from "@/../data/posts";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import PostPagination from "../../PostPagination";

export default async function PostListByTag({
  params: { tag: rawTag },
}: {
  params: { tag: string };
}) {
  const contentsPerPage = 3; // 한 페이지당 보여줄 개수
  const pagesPerGroup = 3; // 하나의 그룹당 포함될 페이지 수

  const decodedTag = decodeURIComponent(rawTag); // URL 디코딩
  const tag = decodedTag.toUpperCase().replace(/-/g, " "); // 하이픈을 공백으로 변환

  return (
    <>
      <PostPagination
        data={postsByTag[tag]}
        contentsPerPage={contentsPerPage}
        pagesPerGroup={pagesPerGroup}
      ></PostPagination>
    </>
  );
}
