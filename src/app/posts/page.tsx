import { posts } from "@/../data/posts";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function PostList() {
  const postListItems = [];

  for (const id in posts) {
    postListItems.push(
      <Card className="relative">
        <Link
          key={id}
          href={`/posts/${id}`}
          className="absolute inset-0"
        ></Link>
        <CardHeader>
          <CardTitle>
            {posts[id].id} : {posts[id].title}
          </CardTitle>
          <CardDescription>
            {posts[id].subTitle}

            <br />

            {posts[id].tagLinks.map(({ tag, link }) => (
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
    <div className="my-4 px-4 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {postListItems}
    </div>
  );
}
