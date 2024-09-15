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
      <Link key={id} href={`/posts/${id}`}>
        <Card>
          <CardHeader>
            <CardTitle>
              {posts[id].id} : {posts[id].title}
            </CardTitle>
            <CardDescription>{posts[id].subTitle}</CardDescription>
          </CardHeader>
        </Card>
      </Link>
    );
  }

  return (
    <div className="my-4 px-4 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {postListItems}
    </div>
  );
}
