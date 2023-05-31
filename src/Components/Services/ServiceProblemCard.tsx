interface SPCProps {
  h2: string;
  p: string;
}

const SPC: React.FC<SPCProps> = (props) => {
  return (
    <div className="serviceProblem">
      <h2>{props.h2}</h2>
      <p>{props.p}</p>
    </div>
  );
};

export default SPC;
