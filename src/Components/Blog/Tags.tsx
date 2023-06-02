import TagItem from "./TagItem";

const Tags = () => {
  return (
    <div className="siteSection filter">
      <h1 className="tagTitle">Filter by Topic</h1>
      <div className="tagContainer">
        <div className="tags">
          <TagItem title="web" count={0} color="red" />
          <TagItem title="mobile" count={0} color="green" />
          <TagItem title="ai" count={0} color="yellow" />
          <TagItem title="cloud" count={0} color="blue" />
          <TagItem title="data" count={0} color="red" />
          <TagItem title="blockchain" count={0} color="green" />
          <TagItem title="business" count={0} color="yellow" />
          <TagItem title="research" count={0} color="blue" />
        </div>
      </div>
    </div>
  );
};

export default Tags;
