// NUMBER 10 //
// https://dev.to/webdeasy/top-20-css-buttons-animations-f41 //

const FancyContactButton = () => {
  return (
    <>
      <div className="FCBcontainer">
        <div className="FCBcenter">
          <button className="FCBbtn">
            <svg
              width="140px"
              height="60px"
              viewBox="0 0 140 60"
              className="FCBborder"
            >
              <polyline
                points="139,1 139,59 1,59 1,1 139,1"
                className="FCBbg-line"
              />
              <polyline
                points="139,1 139,59 1,59 1,1 139,1"
                className="FCBhl-line"
              />
            </svg>
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default FancyContactButton;
