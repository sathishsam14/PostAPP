import { useState, useEffect } from "react";
import {
  Form,
  Input,
  TextArea,
  PostButton,
  InputElement,
  InputCon,
  Label,
  FormCon,
  FormImage,
} from "./styledComponents";

const CreatePost = (props) => {
  const { addPost, editPost, currentPost, setCurrentPost } = props;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (currentPost) {
      setTitle(currentPost.title);
      setContent(currentPost.content);
      setImage(currentPost.image);
    }
  }, [currentPost]);

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContent = (event) => {
    setContent(event.target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (title && content) {
      const post = { title, content, image };
      if (currentPost) {
        editPost(post);
        setCurrentPost(null);
      } else {
        addPost(post);
      }
      setTitle("");
      setContent("");
      setImage(null);
    }
  };

  const onFileChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <FormCon>
      <Form onSubmit={onSubmitForm}>
        <Input placeholder="Title" value={title} onChange={onChangeTitle} />
        <TextArea
          placeholder="Content"
          value={content}
          onChange={onChangeContent}
        />
        {image && <FormImage src={image} alt="Post" />}
        <InputCon>
          <div>
            <InputElement
              type="file"
              id="file-upload"
              accept="image/*"
              onChange={onFileChange}
            />
            <Label htmlFor="file-upload">Choose Files</Label>
          </div>
          <PostButton type="submit">
            {currentPost ? "Update Post" : "Create Post"}
          </PostButton>
        </InputCon>
      </Form>
    </FormCon>
  );
};

export default CreatePost;
