interface TCProps {
  image: string;
  name: string;
  title: string;
}

const TeamCard: React.FC<TCProps> = (props) => {
  return (
    <div className="teamCard">
      <img src={props.image}></img>
      <div>
        <h3>{props.name}</h3>
        <h4>{props.title}</h4>
      </div>
    </div>
  );
};

export default TeamCard;
