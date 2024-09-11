import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faArrowsToEye } from "@fortawesome/free-solid-svg-icons/faArrowsToEye";

export default function PostPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const post = {
    title: `제목 ${id}`,
    content: `이 글은 ${id}번째 글입니다.`,
  };

  return (
    <div className="text-red-500 text-6xl">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faArrowsToEye}></FontAwesomeIcon>
    </div>
  );
}
