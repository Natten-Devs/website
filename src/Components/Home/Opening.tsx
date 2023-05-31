import OpeningAnimation from '../OpeningAnimation';

const Opening = () => {
  return (
    <>
      <div className="opening">
        <h1>Software Development Tailored to Your Unique Needs</h1>
        <a className="openinglink" href="/services">
          see how technology can bring ideas to life ➝
        </a>
      </div>

      <OpeningAnimation top="eightytop" />
    </>
  );
};

export default Opening;
