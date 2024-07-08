import { MdModeEdit, MdOutlineDelete } from "react-icons/md";
import {
  PostContainer,
  Title,
  Content,
  Button,
  Image,
  IconCon,
} from "./styledComponents";

const PostItem = (props) => {
  const { post, deletePost, editPost } = props;

  const onEdit = () => {
    editPost(post);
  };

  const onDelete = () => {
    deletePost(post.title);
  };

  return (
    <PostContainer>
      <IconCon>
        <Title>{post.title}</Title>
        <div>
          <Button onClick={onEdit} title="Edit">
            <MdModeEdit />
          </Button>
          <Button onClick={onDelete} title="Delete">
            <MdOutlineDelete />
          </Button>
        </div>
      </IconCon>
      {post.image && <Image src={post.image} alt="Post" />}
      <Content>{post.content}</Content>
    </PostContainer>
  );
};

export default PostItem;
