import React from "react";
import Button from "./ui/button/button";

function PostItem({ post, number, remove }) {
  return (
    <div className="post">
      <div className="post_content">
        <h1>
          {number},{post.title}
        </h1>
        <p>{post?.body}</p>
      </div>
      <div className="post_button">
        <Button title="delete" onClick={remove} />
      </div>
    </div>
  );
}

export default PostItem;
