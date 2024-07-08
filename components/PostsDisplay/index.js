import React from "react";
import PostItem from "../PostItem";
import { PostsContainer, Heading } from "./styledComponents";

const PostsDisplay = ({ deletePost, editPost, posts }) => {
  return (
    <div>
      <Heading>Your Posts</Heading>
      <PostsContainer>
        {posts.map((post, index) => (
          <PostItem
            key={index}
            post={post}
            deletePost={deletePost}
            editPost={editPost}
          />
        ))}
      </PostsContainer>
    </div>
  );
};

export default PostsDisplay;
