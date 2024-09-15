import { Post } from "@/types/post";
// 인덱스 시그니처 : java DTO 사용과 유사, Post 타입 안정성 보장
export const posts: { [key: number]: Post } = {
  8: {
    id: 8,
    title: "제목 8",
    subTitle: "부제목 8",
    content: "",
  },
  7: {
    id: 7,
    title: "제목 7",
    subTitle: "부제목 7",
    content: "",
  },
  6: {
    id: 6,
    title: "제목 6",
    subTitle: "부제목 6",
    content: "",
  },
  5: {
    id: 5,
    title: "제목 5",
    subTitle: "부제목 5",
    content: "",
  },
  4: {
    id: 4,
    title: "제목 4",
    subTitle: "부제목 4",
    content: "",
  },
  3: {
    id: 3,
    title: "제목 3",
    subTitle: "부제목 3",
    content: "",
  },
  2: {
    id: 2,
    title: "제목 2",
    subTitle: "부제목 2",
    content: "",
  },
  1: {
    id: 1,
    title: "제목 1",
    subTitle: "부제목 1",
    content: "",
  },
};

posts[8].content = `
# 제목 8
## 제목 8
### 제목 8
`.trim();

posts[7].content = `
# 제목 7
## 제목 7
### 제목 7
`.trim();

posts[6].content = `
# 제목 6
## 제목 6
### 제목 6
`.trim();

posts[5].content = `
# 제목 5
## 제목 5
### 제목 5
`.trim();

posts[4].content = `
# 제목 4
## 제목 4
### 제목 4
`.trim();

posts[3].content = `
# 제목 3
## 제목 3
### 제목 3
`.trim();

posts[2].content = `
# 제목 2
## 제목 2
### 제목 2
`.trim();

posts[1].content = `
# 제목 1
## 제목 1
### 제목 1

- 안녕
- 하세요.
    - 반갑습니다.
    - 반갑습니다.

\`\`\`c
#include <stdio.h>

int main() {
    return 0;
}
\`\`\`
`.trim();