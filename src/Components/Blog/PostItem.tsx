import React, { ReactNode } from "react";

type PostItemProps = {
  title: string;
  author: string;
  tags: string;
  preview: ReactNode;
  image: ReactNode;
};

const PostItem: React.FC<PostItemProps> = ({
  title,
  author,
  tags,
  preview,
  image,
}) => {
  return (
    <>
      <div className="postItemContainer">
        {image}
        <h1> {title} </h1>
        <h2> {author} </h2>
        {preview}
        <p className="postTags"> {tags} </p>
      </div>
    </>
  );
};

export default PostItem;
