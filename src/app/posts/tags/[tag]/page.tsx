import { postsByTag } from "@/../data/posts";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

export default async function PostListByTag({
  params: { tag: rawTag },
}: {
  params: { tag: string };
}) {
  const postListItems = [];
  const decodedTag = decodeURIComponent(rawTag); // URL 디코딩
  const tag = decodedTag.toUpperCase().replace(/-/g, " "); // 하이픈을 공백으로 변환
  for (const id in postsByTag[tag]) {
    postListItems.push(
      <Card className="relative">
        <Link href={`/posts/${id}`} className="absolute inset-0"></Link>
        <CardHeader>
          <CardTitle>
            {postsByTag[tag][id].id} : {postsByTag[tag][id].title}
          </CardTitle>
          <CardDescription>
            {postsByTag[tag][id].subTitle}
            <br />
            {postsByTag[tag][id].tagLinks.map(({ tag, link }) => (
              <span key={tag} className="mr-2">
                <Link className="relative" href={link}>
                  #{tag}
                </Link>
              </span>
            ))}
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }
  return (
    <>
      <div className="my-4 px-4 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {postListItems}
      </div>
    </>
  );
}
