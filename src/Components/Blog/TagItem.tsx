import React from "react";

type TagItemProps = {
  title: string;
  count: number;
  color: string;
};

const TagItem: React.FC<TagItemProps> = ({ title, count, color }) => {
  return (
    <>
      <div className="tagItemContainer" id={color}>
        <h1># {title} </h1>
        <h2 className="tagCountBox count" id={color}>
          {" "}
          {count}
        </h2>
      </div>
    </>
  );
};

export default TagItem;
