type Post = { id: number; title: string; content: string };

// 인덱스 시그니처 : java DTO 사용과 유사, Post 타입 안정성 보장
export const posts: { [key: number]: Post } = {
  3: {
    id: 3,
    title: "제목 3",
    content: "",
  },
  2: {
    id: 2,
    title: "제목 2",
    content: "",
  },
  1: {
    id: 1,
    title: "제목 1",
    content: "",
  },
};

posts[3].content = `
# 제목 3
## 제목 3
### 제목 3
`.trim();

posts[2].content = `
# 제목 2
## 제목 2
### 제목 2
<script>
  alert('하이');
</script>
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