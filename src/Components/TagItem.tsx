import React from "react";

type TagItemProps = {
    title: string,
    count: number;
};

const TagItem: React.FC<TagItemProps> = ({ title, count }) => {
    return (
        <>
        <div className="tagItemContainer">
            <p># {title} {count}</p>
        </div>
        </>
    );
};

export default TagItem;
