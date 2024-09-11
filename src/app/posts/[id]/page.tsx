export default function PostPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const post = {
    title: `제목 ${id}`,
    content: `이 글은 ${id}번째 글입니다.`,
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
