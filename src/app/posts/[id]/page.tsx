import { posts } from "@/../data/posts";

import { unified } from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import PostDetailBody from "./PostDetailBody";
import { TocSidebar } from "@/app/posts/[id]/TocSidebar";

// 최초 자동 실행
export default async function PostDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = parseInt(params.id);

  const post = posts[id];

  const htmlText = await unified()
    // Markdown -> AST 변경
    .use(markdown)
    // AST -> HTML AST
    .use(remark2rehype)
    // 코드 블록 하이라이터 테마 지정
    .use(rehypePrettyCode, {
      theme: "github-dark",
      grid: true,
    })
    // HTML AST -> 문자열 형태 HTML
    .use(html)
    // 변환된 HTML 문자열 반환
    .process(post.content);

  // 일반 변수의 문제
  // 1. 값이 바뀌어도 당연하게 관련 UI 갱신되지 않는다.
  // 2. 값을 바꾸고 함수를 재실행하면 이전턴의 값을 잃는다.

  // 클래스형 컴포넌트 - 인스턴스형 변수 필요
  // 함수형에 hook -> use로 시작 -> 갈고리처럼 걸어두고 유지한다.(함수안에 사용할 수 있는 인스턴스변수)
  // 함수를 재실행 + virtual DOM이라는 가상세계 시뮬 돌려보고 다른점이 있는 부분만 다시 그려줌
  // 딱 1개의 숫자를 변경하기 위해 전체 페이지 리로드 단점

  // 리액트에서 중괄호 ({}) 가 자바스크립트 객체를 출력할 수 있게 해줌

  return (
    <div className="flex justify-center items-center">
      <div className="w-4/5">
        <PostDetailBody post={post} html={htmlText.toString()} />
      </div>
      <div className="w-1/5">
        <TocSidebar html={htmlText.toString()} />
      </div>
    </div>
  );
}
