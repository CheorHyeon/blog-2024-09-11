import { useEffect, useRef, useState } from 'react';

export const useHeadingsObserver = (query: string) => {
  const observer = useRef<IntersectionObserver>();
  // 현재 뷰포트에 보이는 요소의 Id 저장
  const [activeIdList, setActiveIdList] = useState<string[]>([]);

  useEffect(() => {
    // 뷰포트의 경계 여백 설정 : 요소가 뷰포트에 들어오거나 나갈 때 감지 범위 조정
    const scrollMarginOption = { rootMargin: '-32px 0px -80px 0px' };

    // IntersectionObserver가 호출하는 콜백 함수. 감지된 요소의 목록 entries로 받음
    const handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const targetId = `#${entry.target.id}`;
        // isIntersecting : 요소가 뷰포트에 있는지 확인 결과
        if (entry.isIntersecting) {
          setActiveIdList((prev) => [...prev, targetId]);
        }
        // 뷰 포인트에서 나가면 제거
        else {
          setActiveIdList((prev) => prev.filter((elem) => elem !== targetId));
        }
      });
    };

    // 감시하다 등장 & 사라질 때 함수를 실행해줌
    observer.current = new IntersectionObserver(handleObserver, scrollMarginOption);

    const elements = document.querySelectorAll(query);
    // obseve : html 요소가 화면에 등장하는지 감시해줌
    elements.forEach((elem) => observer.current?.observe(elem));

    // useEffect의 정리 함수, 컴포넌트 언마운트될 때 모든 관찰 해제
    return () => observer.current?.disconnect();
  }, [query]);

  return activeIdList.length > 0 ? [activeIdList[0]] : [];
};