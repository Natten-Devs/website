import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AboutSlide from "./Components/About/AboutSlide";
import OpeningAnimation from "./Components/OpeningAnimation";

const Legal = () => {
  return (
    <>
      <Navbar />
      <div className="opening slideshow">
        <AboutSlide
          header="Legal"
          paragraph="by interacting with this site you agree to the following"
        />
        <OpeningAnimation top="threefivetop" />
      </div>
      <div className="siteSection terms">
        <h1 id="JobAppTOA">Job Application Terms of Agreement</h1>
        <h3>1.</h3>
        <p>
          Accuracy of Information: You confirm that all information provided in
          your application, including personal details, education, work
          experience, and skills, is accurate and truthful to the best of your
          knowledge. Any false or misleading information may result in the
          rejection of your application or termination of employment, if
          discovered later.
        </p>
        <br></br>
        <h3>2.</h3>
        <p>
          Application Review: You acknowledge that the submission of your
          application does not guarantee an interview or employment. Our
          organization reserves the right to review applications and select
          candidates based on qualifications, skills, experience, and company
          requirements.
        </p>
        <br></br>
        <h3>3.</h3>
        <p>
          Data Privacy: You understand and consent to the collection, storage,
          and processing of your personal data provided in the application form
          for recruitment purposes. Our organization will handle your personal
          information in accordance with applicable data protection laws and our
          privacy policy.
        </p>
        <br></br>
        <h3>4.</h3>
        <p>
          You agree to maintain the confidentiality of any proprietary or
          confidential information shared with you during the recruitment
          process. This includes, but is not limited to, trade secrets, business
          strategies, intellectual property, and other sensitive information
          related to our organization and its clients.
        </p>
        <br></br>
        <h3>5.</h3>
        <p>
          Interview and Assessment: You may be required to participate in one or
          more interviews, assessments, or tests as part of the selection
          process. You agree to undertake these evaluations to the best of your
          abilities and understand that the results may be considered in the
          decision-making process.
        </p>
        <br></br>
        <h3>6.</h3>
        <p>
          Background Checks: Our organization reserves the right to conduct
          background checks, reference checks, and verification of the
          information provided in your application. By submitting your
          application, you consent to such checks if deemed necessary by our
          organization.
        </p>
        <br></br>
        <h3>7.</h3>
        <p>
          Non-Discrimination: Our organization is committed to equal employment
          opportunities and prohibits discrimination or harassment based on
          race, color, religion, gender, sexual orientation, national origin,
          age, disability, or any other protected status. We comply with all
          applicable employment laws and regulations.
        </p>
        <br></br>
        <h3>8.</h3>
        <p>
          Offer of Employment: The submission of your application does not
          constitute an employment offer or contract. Any offer of employment
          will be communicated separately, and the terms and conditions of
          employment will be governed by a formal employment agreement.
        </p>
        <br></br>
        <h3>9.</h3>
        <p>
          Modifications: Our organization reserves the right to modify or update
          these terms of agreement at any time without prior notice. It is your
          responsibility to review and familiarize yourself with the current
          terms before submitting your application.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Legal;
