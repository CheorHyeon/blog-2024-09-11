import { Post, RawPost } from "@/types/post";
// 인덱스 시그니처 : java DTO 사용과 유사, Post 타입 안정성 보장
const rawPosts: { [key: number]: RawPost } = {
  12: {
    id: 12,
    title: "제목 8",
    subTitle: "부제목 8",
    content: "",
    tag : "#React #Vue #Angular #C 프로그래밍"
  },
  11: {
    id: 11,
    title: "제목 11",
    subTitle: "부제목 11",
    content: "",
    tag : "#React #Vue #Angular #C 프로그래밍"
  },
  10: {
    id: 10,
    title: "제목 10",
    subTitle: "부제목 10",
    content: "",
    tag : "#React #Vue #Angular #C 프로그래밍"
  },
  9: {
    id: 9,
    title: "제목 9",
    subTitle: "부제목 9",
    content: "",
    tag : "#React #Vue #Angular #C 프로그래밍"
  },
  8: {
    id: 8,
    title: "제목 8",
    subTitle: "부제목 8",
    content: "",
    tag : "#React #Vue #Angular #C 프로그래밍"
  },
  7: {
    id: 7,
    title: "제목 7",
    subTitle: "부제목 7",
    content: "",
    tag : ""
  },
  6: {
    id: 6,
    title: "제목 6",
    subTitle: "부제목 6",
    content: "",
    tag : "#React #Vue #Angular"
  },
  5: {
    id: 5,
    title: "제목 5",
    subTitle: "부제목 5",
    content: "",
    tag : "#React #Vue #Angular"
  },
  4: {
    id: 4,
    title: "제목 4",
    subTitle: "부제목 4",
    content: "",
    tag : "#React #Vue #Angular"
  },
  3: {
    id: 3,
    title: "제목 3",
    subTitle: "부제목 3",
    content: "",
    tag : "#React #Vue #Angular"
  },
  2: {
    id: 2,
    title: "제목 2",
    subTitle: "부제목 2",
    content: "",
    tag : "#React #Vue #Angular"
  },
  1: {
    id: 1,
    title: "제목 1",
    subTitle: "부제목 1",
    content: "",
    tag : "#React #Vue #Angular"
  },
};

rawPosts[8].content = `
# 제목 8
## 제목 8
### 제목 8
`.trim();

rawPosts[7].content = `
# 제목 7
## 제목 7
### 제목 7
`.trim();

rawPosts[6].content = `
# 제목 6
## 제목 6
### 제목 6
`.trim();

rawPosts[5].content = `
# 제목 5
## 제목 5
### 제목 5
`.trim();

rawPosts[4].content = `
# 제목 4
## 제목 4
### 제목 4
`.trim();

rawPosts[3].content = `
# 제목 3
## 제목 3
### 제목 3
`.trim();

rawPosts[2].content = `
# 제목 2
## 제목 2
### 제목 2
`.trim();

rawPosts[1].content = `
# 제목 1 h1
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
## 제목 1 h2
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.

### 제목 1 h3
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
#### 제목 1 h4
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.


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

/*
  - 객체는 map, filter와 같은 함수 사용할 수 없으므로 배열로 변환하고 연산 후 다시 객체로 변환한다.
    - Object.fromEntries : 배열을 객체로 변환
    - Object.entries : 객체를 배열로 변환
*/
export const posts: { [key: number]: Post } = Object.fromEntries(
  Object.entries(rawPosts).map(([key, value]) => {
    // value 객체에서 tag를 분리하고 나머지 속성들을 post 변수에 저장
    const { tag, ...post } = value;
    // "#Java #React" -> " #Java #React" 형태로 변경하여 " #" 기준으로 분리하여 해시태그 문자만 추출
    const tags = (" " + tag)
      .split(" #")
      .map((tag) => tag.trim().toLocaleUpperCase())
      // 해시태그 작성하려 했으나 문자를 작성하지 않은 경우 대비 " # "
      .filter((tag) => tag !== "");
    const tagLinks = tags.map((tag) => {
      const tagSlog = tag.replace(/ /g, "-");
      return {
        link: `/posts/tags/${tagSlog}`,
        tag
      };
    });
    return [
      key,
      {
        ...post,
        tags,
        tagLinks,
      },
    ];
  })
);

export const postsByTag: { [key: string]: { [key: number]: Post } } =
  // Object.entries : [key, value] 형태의 배열 생성
  // reduce : key는 hashtag 이름 : post 값 형태로 만들라고 사용
  Object.entries(posts).reduce(
    (acc, [key, post]) => {
      post.tags.forEach((tag) => {
        // 해당 태그 key가 없다면 value를 빈 객체로 하여 생성
        if (!acc[tag]) {
          acc[tag] = {};
        }
        acc[tag][Number(key)] = post;
      });
      return acc;
    },
    // 2번째 인자는 초기값
    {} as { [key: string]: { [key: number]: Post } }
  );