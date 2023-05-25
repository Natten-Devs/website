import TagItem from "./TagItem";

const Tags = () => {
    return (
        <>
        <div className="tagContainer">
            <div className="tags">
                <TagItem title="lorem ipsum" count={3} />               
            </div>
        </div>
        </>
    );
};

export default Tags;