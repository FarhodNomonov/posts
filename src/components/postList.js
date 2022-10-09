import React from "react";
import PostItem from "./postItem";

function PostList({ posts, remove }) {
  return (
    <div>
      <header className="list_title">
        <h1>List of posts</h1>
      </header>
      <div className="post_container">
        {posts.map((post, i) => {
          return (
            <PostItem
              post={post}
              number={i + 1}
              key={post?.id}
              remove={remove}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PostList;
