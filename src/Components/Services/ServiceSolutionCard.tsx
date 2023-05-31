interface SSCProps {
  imgclass: string;
  title: string;
  shortdesc: string;
  linkto: string;
}

const ServiceSolutionCard: React.FC<SSCProps> = (props) => {
  return (
    <div className={`serviceSolution ${props.imgclass}`}>
      <div className="shade"></div>
      <div className="content">
        <h2>{props.title}</h2>
        <p>{props.shortdesc}</p>
      </div>
    </div>
  );
};

export default ServiceSolutionCard;
//<a href={`/services/${props.linkto}`}>read more →</a>
