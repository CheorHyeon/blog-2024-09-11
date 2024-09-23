import { postsByTag } from "@/../data/posts";

import Link from "next/link";

export default async function PostListByTag() {
  // 모든 태그 가져오기
  const tags = Object.keys(postsByTag);

  let totalPostCount = 0;
  tags.forEach((tag) => {
    totalPostCount += Object.keys(postsByTag[tag] || {}).length;
  });

  return (
    <div className="my-4 px-4 container mx-auto">
      <h2 className="text-xl font-bold mb-4">태그별 게시글 수</h2>
      <ul className="mb-4 space-y-2">
        {/* 전체 게시글 수를 "All"로 표시 */}
        <li>
          <Link
            href="/posts"
            className="inline-block p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            #All ({totalPostCount})
          </Link>
        </li>
        {/* 각 태그별 게시글 수 표시 */}
        {tags.map((tag) => {
          const posts = postsByTag[tag] || {};
          const postCount = Object.keys(posts).length;

          return (
            <li key={tag}>
              <Link
                href={`/posts/tags/${tag.replace(/ /g, "-")}`}
                className="inline-block p-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                #{tag} ({postCount})
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
