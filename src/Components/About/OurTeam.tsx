import TeamCard from "./TeamCard";
import Image_CarsonFrankovich from "../../assets/team_photos/CarsonFrankovich.png";
import Image_DanielPalma from "../../assets/team_photos/DanielPalma.png";

const OurTeam = () => {
  return (
    <div id="Team" className="siteSection ourteam">
      <h1>Our Team</h1>

      <div className="teamCardContainer">
        <TeamCard
          image={Image_CarsonFrankovich}
          name="Carson Frankovich"
          title="Founder & CEO"
        />

        <TeamCard
          image={Image_DanielPalma}
          name="Daniel Palma"
          title="Co-Founder & Full-Stack Developer"
        />
      </div>
    </div>
  );
};

export default OurTeam;
