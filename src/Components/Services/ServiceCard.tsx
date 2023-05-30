interface SProps {
  id: string;
  name: string;
  description: string;
  linkTo: string;
  linkText: string;
}

const ServiceCard: React.FC<SProps> = (props) => {
  return (
    <div id={props.id} className="serviceCard">
      <video id="backgroundVideo" autoPlay loop muted>
        <source
          src="https://files.catbox.moe/l1v48v.mp4"
          type="video/mp4"
        ></source>
      </video>
      <div className="serviceText">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <a href={props.linkTo}>{props.linkText}</a>
      </div>
    </div>
  );
};

export default ServiceCard;