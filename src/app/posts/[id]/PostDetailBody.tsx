"use client";

import { LocaleCalendar } from "@/components/customUi/locale-calendar";
import { useState } from "react";
import { Post } from "@/types/post";
import Link from "next/link";
export default function PostDetail({
  post,
  html,
}: {
  post: Post;
  html: string;
}) {
  const [date, setDate] = useState<Date | undefined>();

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
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </div>
  );
}
