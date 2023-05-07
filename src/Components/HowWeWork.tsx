import placeHolderImage from "../assets/place-holder.png";

const HowWeWork = () => {
  return (
    <div className="howWeWork">
      <h1>How We Work</h1>

      <div className="card">
        <img src={placeHolderImage}></img>
        <div className="text">
          <h2>Client Engagement</h2>
          <p>
            Our first step is to engage with you, the client, to understand your
            vision and requirements for your software project. We may provide a
            quote or set up a meeting with you to discuss your needs and goals
            in more detail.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="text">
          <h2>Project Planning</h2>
          <p>
            Once we understand your requirements, we move on to project
            planning. This involves creating a detailed plan for your software
            development project, including setting objectives, outlining
            milestones, and estimating the size of the project.
          </p>
        </div>
        <img src={placeHolderImage}></img>
      </div>

      <div className="card">
        <img src={placeHolderImage}></img>
        <div className="text">
          <h2>Development Process</h2>
          <p>
            The development process is where we bring your project to life. We
            use an agile methodology called Scrum to manage the development
            process. This involves weekly check-ins with you to ensure that the
            project is progressing as expected and that any changes to the plan
            are communicated effectively.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="text">
          <h2>Quality Assurance</h2>
          <p>
            Our final step is to ensure that your software solution is of the
            highest quality. We use a rigorous quality assurance and testing
            process to identify and resolve any issues before delivery.
          </p>
        </div>
        <img src={placeHolderImage}></img>
      </div>
    </div>
  );
};

export default HowWeWork;
