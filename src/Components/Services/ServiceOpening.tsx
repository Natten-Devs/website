const ServiceOpening = () => {
  return (
    <div id="serviceopening" className="serviceCard">
      <video id="backgroundVideo" autoPlay loop muted>
        <source
          src="https://files.catbox.moe/l1v48v.mp4"
          type="video/mp4"
        ></source>
      </video>
      <div className="serviceText">
        <h1>We Fuel the Change in Your Business</h1>
        <p>We are a full-service development agency crafting software solutions customized for the specific needs of our clients.</p>
        <a href="/services#Steps">read more ↴</a>
      </div>
    </div>
  );
};

export default ServiceOpening;
