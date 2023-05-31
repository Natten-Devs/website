const ServiceOpening = () => {
  return (
    <>
      <div id="serviceopening" className="serviceOpening">
        <video id="backgroundVideo" autoPlay loop muted>
          <source
            src="https://files.catbox.moe/hs8yki.mp4"
            type="video/mp4"
          ></source>
        </video>
        <div className="serviceText">
          <h1>We Fuel the Change in Your Business</h1>
          <p>
            We are a full-service development agency crafting software solutions
            customized for the specific needs of our clients.
          </p>
          <a href="/services#Solutions">read more ↴</a>
        </div>
      </div>
    </>
  );
};

export default ServiceOpening;
