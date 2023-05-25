import React from "react";

type TagItemProps = {
    title: string,
    count: number;
};

const TagItem: React.FC<TagItemProps> = ({ title, count }) => {
    return (
        <>
        <div className="tagItemContainer">
            <h1># {title} </h1>
            <h1 className="tagCountBox"> {count}</h1>
        </div>
        </>
    );
};

export default TagItem;
