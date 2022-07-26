import { useParams } from "react-router-dom";
import PostContainer from "../containers/PostListContainer";

const PostPage = () => {
  const params = useParams();
  return <PostContainer postId={parseInt(params.id, 10)} />;
};

export default PostPage;
