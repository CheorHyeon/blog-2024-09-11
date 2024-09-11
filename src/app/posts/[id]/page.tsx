"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faArrowsToEye } from "@fortawesome/free-solid-svg-icons/faArrowsToEye";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function PostPage({ params }: { params: { id: string } }) {
  const [date, setDate] = useState<Date | undefined>();
  const { id } = params;

  const post = {
    title: `제목 ${id}`,
    content: `이 글은 ${id}번째 글입니다.`,
  };

  return (
    <div className="text-500 text-6xl">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faArrowsToEye}></FontAwesomeIcon>
      <Button variant="outline">Button</Button>

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />

      <hr />
      {date?.toString()}
    </div>
  );
}
