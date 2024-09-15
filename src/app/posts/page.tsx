import { posts } from "@/../data/posts";
import Link from "next/link";

export default async function PostList() {
  const postListItems = [];

  for (const id in posts) {
    postListItems.push(
      <li key={id} className="flex">
        <Link href={`/posts/${id}`}>
          {posts[id].id} {posts[id].title}
        </Link>
      </li>
    );
  }

  return (
    <>
      <ul>{postListItems}</ul>
    </>
  );
}
