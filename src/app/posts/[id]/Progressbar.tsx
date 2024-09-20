"use client";
import { useState, useRef, useEffect } from "react";

export const Progressbar = () => {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const scroll = () => {
      // 현재 스크롤 위치 : 문서의 최상단(0)에서 현재 스크롤 위치까지의 높이 반환
      const scrollTop = document.documentElement.scrollTop;
      // 스크롤 할 수 있는 최대 거리
      const height =
        // element 전체의 높이
        document.documentElement.scrollHeight -
        // 사용자가 볼 수 있는 높이
        document.documentElement.clientHeight;

      // 재렌더링 될 때 애니메이션이 삭제되지 않고 계속 쌓이는 문제 발생 -> 화면에 사라져도 메모리 차지
      // 기존 애니메이션의 id를 저장해뒀다가 재렌더링 될때 이전에 저장된 애니메이션 명시적 삭제 처리
      if (rafRef.current) {
        // 명시적 애니메이션 취소 처리
        cancelAnimationFrame(rafRef.current);
      }

      // requestAnimationFrame은 id값을 반환하는데 이를 재렌더링 되지 않는 useRef에 저장
      // 재렌더링 시 명시적으로 기존 애니메이션 삭제하기 위해 저장
      rafRef.current = requestAnimationFrame(() => {
        setProgress(scrollTop / height);
      });
    };
    // window : 브라우저 전역 객체, 현재 열린 웹 페이지의 모든 정보 포함
    // "scroll" : 스크롤 이벤트 지정
    window.addEventListener("scroll", scroll);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      window.removeEventListener("scroll", scroll);
    };
  }, []);
  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] rounded-lg bg-gray-600 dark:bg-gray-300"
      style={{ width: `${progress * 100}%` }}
    ></div>
  );
};
