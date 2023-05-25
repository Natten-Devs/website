import React from "react";

interface SSCProps {
  onClick: () => void;
  title: string;
  img: string;
  cName: string;
}

const SoftwareSolutionCard: React.FC<SSCProps> = (props) => {
  return (
    <div onClick={props.onClick} className={`infoCard ${props.cName}`}>
      <img src={props.img} alt={props.title}></img>
      <h4>{props.title}</h4>
    </div>
  );
};

export default SoftwareSolutionCard;
