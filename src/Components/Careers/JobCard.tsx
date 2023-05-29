import PinIcon from "../../assets/pin.svg";

interface JCProps {
  title: string;
  location: string;
  jobId: string;
}

const JobCard: React.FC<JCProps> = (props) => {
  return (
    <div className="jobCard">
      <div className="mainInfo">
        <h2>{props.title}</h2>
        <div className="locationContainer">
          <img src={PinIcon}></img>
          <p>{props.location}</p>
        </div>
      </div>
      <div>
        <a href={`/careers/${props.jobId}`} className="applyBtn">
          Apply
        </a>
      </div>
    </div>
  );
};

export default JobCard;
