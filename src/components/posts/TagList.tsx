"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { postsByTag } from "../../../data/posts";

interface TagListProps {
  tags: string[];
  selectedTag: string;
  totalPostCount: number;
}

export default function TagList({
  tags,
  selectedTag,
  totalPostCount,
}: TagListProps) {
  return (
    <ul className="flex justify-center gap-3 mb-4">
      <li>
        <a href="/posts">
          <button
            className={cn(
              "inline-block p-2 rounded transition",
              selectedTag === ""
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            )}
          >
            #All ({totalPostCount})
          </button>
        </a>
      </li>
      {tags.map((tag) => {
        const tagSlog = tag.replace(/ /g, "-"); // 하이픈으로 변환
        const postCount = Object.keys(postsByTag[tag] || {}).length; // 게시글 수
        return (
          <li key={tag}>
            <Link href={`/posts/tags/${tagSlog}`}>
              <button
                className={cn(
                  "inline-block p-2 rounded transition",
                  selectedTag === tag
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                )}
              >
                #{tag} ({postCount})
              </button>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
