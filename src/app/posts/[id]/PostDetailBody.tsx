"use client";

import { LocaleCalendar } from "@/components/customUi/locale-calendar";
import { useState } from "react";
import { Post } from "@/types/post";
import { genTOCId } from "@/lib/posts";
import Link from "next/link";
export default function PostDetail({
  post,
  html,
}: {
  post: Post;
  html: string;
}) {
  const [date, setDate] = useState<Date | undefined>();

  // HTML에 ID 설정
  const setHeadingIds = (html: string) => {
    return html.replace(/<(h[1-4])>(.*?)<\/\1>/g, (match, tag, content) => {
      const id = genTOCId(content);
      return `<${tag} id="${id}">${content}</${tag}>`;
    });
  };

  const modifiedHtml = setHeadingIds(html); // ID가 설정된 HTML

  return (
    <div className="p-4">
      <LocaleCalendar
        selected={date}
        onSelect={setDate}
        mode="single"
        className="rounded-md border inline-flex"
      />

      {date?.toDateString()}

      <hr className="my-4" />

      <h1 className="text-5xl font-bold">
        {post.id} : {post.title}({post.subTitle})
        <hr />
      </h1>

      <div>
        {post.tagLinks.map(({ tag, link }) => (
          <span key={tag} className="mr-2">
            <Link href={link}>#{tag}</Link>
          </span>
        ))}
      </div>

      <div className="prose max-width max-w-full my-10">
        <div dangerouslySetInnerHTML={{ __html: modifiedHtml }}></div>
      </div>
    </div>
  );
}
