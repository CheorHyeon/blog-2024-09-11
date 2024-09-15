"use client";

import { LocaleCalendar } from "@/components/customUi/locale-calendar";
import React from "react";
import { Post } from "@/types/post";

export default function PostDetail({
  post,
  html,
}: {
  post: Post;
  html: String;
}) {
  const [date, setDate] = React.useState<Date | undefined>();

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
        {post.id} : {post.title}
      </h1>

      <div className="prose max-width max-w-full my-10">
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </div>
  );
}
