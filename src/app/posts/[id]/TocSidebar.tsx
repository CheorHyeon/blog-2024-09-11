"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { genTOCId } from "@/lib/posts";
import { useHeadingsObserver } from "@/hook/useHeadingsObserver";
import { cn } from "@/lib/utils";

interface Heading {
  text: string;
  link: string;
  indent: number;
}

export const TocSidebar = ({ html }: { html: string }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    // HTML을 DOMParser를 사용하여 파싱
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // 헤딩 요소를 선택
    const headingElements = Array.from(doc.querySelectorAll("h1, h2, h3, h4"));

    // 헤딩 정보를 추출
    const newHeadings = headingElements.map((heading) => {
      const text = heading.textContent || ""; // textContent로 텍스트 추출
      const level = parseInt(heading.tagName[1], 10); // H1은 1, H2는 2 등
      const link = "#" + genTOCId(text);

      return {
        text,
        link,
        indent: level - 1, // H1은 0, H2는 1
      };
    });

    setHeadings(newHeadings);
  }, [html]);

  // 지역변수 임에도 리렌더링 되는 이유는 useHeadingsObserver 내부적으로 상태값으로 관리되는 값이기 때문
  // 뷰포인트가 변경되면 handleObserver 함수가 실행되고, 해당 함수 내부적으로 setActiveList로 배열의 주소를 변경한다.
  // state가 변함을 감지 -> 이 상태를 참조하는 컴포넌트 다시 렌더링
  // 값만 복사한 새로운 배열을 받더라도 원본 상태가 변경되었기 때문에 이 배열을 참조하는 TocSidebar도 리렌더링됨
  const activeIdList = useHeadingsObserver("h1, h2, h3, h4");

  return (
    <div className="fixed top-[30%] flex flex-col gap-2 py-4 px-3">
      <ul className="bg-white border border-gray-300 shadow-md p-4">
        {headings.map((item) => {
          const isIntersecting = activeIdList.includes(item.link);
          const marginClass = getMarginClass(item.indent);
          return (
            <li
              key={item.link}
              className={cn(
                isIntersecting && "text-large text-pink-600",
                marginClass
              )}
            >
              <Link href={item.link}>{item.text}</Link>
            </li>
          );
        })}
      </ul>
      <button
        onClick={toTop}
        className="bg-blue-500 text-white p-2 rounded shadow text-center"
      >
        맨 위로 가기
      </button>
    </div>
  );
};

const getMarginClass = (indent: number) => {
  switch (indent) {
    case 1:
      return "ml-4"; // For indent level 1
    case 2:
      return "ml-8"; // For indent level 2
    case 3:
      return "ml-12"; // For indent level 3
    case 4:
      return "ml-16"; // For indent level 4
    default:
      return ""; // No margin for indent level 0
  }
};

const toTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
