import OpeningAnimation from './OpeningAnimation';

const Opening = () => {
  return (
    <>
      <div className="opening">
        <h1>Software Development Tailored to Your Unique Needs</h1>
        <a href="#softwareSolutions">
          see how technology can bring ideas to life ↴
        </a>
      </div>

      <OpeningAnimation />
    </>
  );
};

export default Opening;
