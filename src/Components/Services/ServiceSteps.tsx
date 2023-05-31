const ServiceSteps = () => {
  return (
    <div className="siteSection dark topSpace">
      <div className="serviceStep left">
        <h1>{`> 1`}</h1>
        <div className="content">
          <h2>The Idea</h2>
          <p>
            Before we begin, let's take a look at your idea and evaluate
            potential solutions and risks for each option. We'll validate your
            idea by building a prototype to make sure core functionality is up
            to standards.
          </p>
        </div>
      </div>

      <div className="serviceStep right">
        <h1>{`> 2`}</h1>
        <div className="content">
          <h2>Planning</h2>
          <p>
            After the product idea is formed, we begin planning. Our team uses
            an agile methodology called scrum to complete large portions of the
            project one week at a time until the minimum viable product (MVP) is
            ready for release.
          </p>
        </div>
      </div>

      <div className="serviceStep left">
        <h1>{`> 3`}</h1>
        <div className="content">
          <h2>Development</h2>
          <p>
            After the minimum viable product (MVP) is launched, we continue to
            adjust and improve upon what we created. We treat your business like
            its ours to constantly improve our products even after launch.
          </p>
        </div>
      </div>

      <div className="serviceStep right">
        <h1>{`> 4`}</h1>
        <div className="content">
          <h2>Testing</h2>
          <p>
            Software is no good without testing. We test and configure our
            software to assure quality is up to standard. We refuse to launch a
            faulty or half-complete product because our success is your success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSteps;
