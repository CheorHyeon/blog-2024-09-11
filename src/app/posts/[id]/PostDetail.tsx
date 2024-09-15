"use client";

import { LocaleCalendar } from "@/components/customUi/locale-calendar";
import React from "react";

export default function PostDetail({ html }: { html: string }) {
  const [date, setDate] = React.useState<Date | undefined>();

  return (
    <>
      <LocaleCalendar
        selected={date}
        onSelect={setDate}
        mode="single"
        className="rounded-md border inline-flex"
      />

      {date?.toDateString()}

      <hr />

      <div className="prose max-width max-w-full my-10">
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </>
  );
}
