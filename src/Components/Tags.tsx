import TagItem from "./TagItem";

const Tags = () => {
    return (
        <>
        <div className="tagContainer">
            <div className="tags">
                <TagItem title="tech" count={3} />
                <TagItem title="front end" count={4} />
                <TagItem title="back end" count={5} />
                <TagItem title="cloud services" count={2} />
            </div>
        </div>
        </>
    );
};

export default Tags;