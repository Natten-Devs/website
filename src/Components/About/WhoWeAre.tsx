const WhoWeAre = () => {
  return (
    <div className="siteSection">
      <h1 style={{ marginBottom: "20px" }}>Who We Are</h1>

      <div className="wwacontainer">
        <div className="card wwa">
          <div className="text">
            <h2>About</h2>
            <p>
              Established in 2023, our team is a{" "}
              <a className="link" href="/about#Partners" id="link1">
                trusted
              </a>{" "}
              partner based in the heart of Central Florida. With a focus on
              delivering software solutions, we specialize in providing tailored
              contracting services to clients across various sectors. Through
              collaborative partnerships and a client-centric approach, we
              exceed expectations, enabling partnering businesses to thrive in
              the digital age.
            </p>
          </div>
        </div>

        <div className="card wwa">
          <div className="text">
            <h2>Our Mission</h2>
            <p>
              At Natten, we believe in the philosophy of partnerships. We create
              alliances between our technical expertise and your visionary goals
              because we understand that true success lies in teamwork. Our{" "}
              <a className="link" id="link2" href="/about#Team">
                dedicated team
              </a>{" "}
              actively engages with you throughout the development process,
              ensuring that our partnership is founded on trust, open
              communication, and shared goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
