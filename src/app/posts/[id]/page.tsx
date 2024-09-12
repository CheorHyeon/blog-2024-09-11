"use client";

import { useState } from "react";
import { posts } from "../../../../data/posts";

import { unified } from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";

// 최초 자동 실행
export default function PostPage({ params }: { params: { id: string } }) {
  // useState : 인스턴스 변수, date에 값을 Date 타입이거나 undefined 타입
  // 인스턴스 변수의 경우 최초에는 괄호 값되지만
  // 날짜 선택 시 setDate함수 실행되면서 date에 값이 할당되고, 함수를 다시 실행시켜 전체 다시 그려줌
  // UI와 관련된곳에 useState사용

  // 구조 분해 할당 : useState는 배열로 응답, date와 setDate를 추출
  const [date, setDate] = useState<Date | undefined>();
  const id = parseInt(params.id);

  const post = posts[id];

  const html_text = unified()
    // Markdown -> AST 변경
    .use(markdown)
    // AST -> HTML AST
    .use(remark2rehype)
    // HTML AST -> 문자열 형태 HTML
    .use(html)
    // 변환된 HTML 문자열 반환
    .processSync(post.content);

  // 일반 변수의 문제
  // 1. 값이 바뀌어도 당연하게 관련 UI 갱신되지 않는다.
  // 2. 값을 바꾸고 함수를 재실행하면 이전턴의 값을 잃는다.

  // 클래스형 컴포넌트 - 인스턴스형 변수 필요
  // 함수형에 hook -> use로 시작 -> 갈고리처럼 걸어두고 유지한다.(함수안에 사용할 수 있는 인스턴스변수)
  // 함수를 재실행 + virtual DOM이라는 가상세계 시뮬 돌려보고 다른점이 있는 부분만 다시 그려줌
  // 딱 1개의 숫자를 변경하기 위해 전체 페이지 리로드 단점

  // 리액트에서 중괄호 ({}) 가 자바스크립트 객체를 출력할 수 있게 해줌

  return (
    <div className="p-4">
      <h1 className="prose text-5xl font-bold">{post.title}</h1>
      <div
        className="prose max-width max-w-full my-10"
        dangerouslySetInnerHTML={{ __html: html_text.toString() }}
      ></div>
    </div>
  );
}
