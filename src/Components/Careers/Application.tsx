import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

interface AProps {
  job: string;
}

const Application: React.FC<AProps> = (props) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = Object.values(form.current).every(
      (value) => value.length > 0
    );

    emailjs
      .sendForm(
        "service_jda4vjv",
        "template_4f9mfen",
        form.current,
        "zjXJSCfTtJDKebygn"
      )
      .then(
        (result: emailjs.EmailJSResponseStatus) => {
          console.log(result.text);
          if (form.current !== null) {
            form.current.reset();
          }
          alert("Message sent successfully.");
        },
        (error: emailjs.Error) => {
          console.log(error.text);
          alert(
            "There was an error sending your message. Please try again later."
          );
        }
      );
  };

  return (
    <div className="siteSection" id="Application">
      <h1>Application</h1>

      <form ref={form} onSubmit={sendEmail} className="appForm">
        <label>Position</label>
        <input
          className="notAllowedCursor"
          type="text"
          id="pname"
          name="pname"
          value={props.job}
          readOnly
        ></input>

        <label>First Name</label>
        <input type="text" id="fname" name="fname" required></input>

        <label>Last Name</label>
        <input type="text" id="lname" name="lname" required></input>

        <label>Email</label>
        <input
          type="email"
          id="aemail"
          name="aemail"
          placeholder="username@example.com"
          required
        ></input>

        <label>Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="123-456-7890"
          required
        ></input>

        <label>Education Status</label>
        <select id="edu" name="edu" required>
          <option value="">-- Please choose an option --</option>
          <option value="notstudent">Not a current student</option>
          <option value="student">Current student</option>
        </select>

        <label>Why Natten?</label>
        <textarea id="whynatten" name="whynatten"></textarea>

        <label>What do you think makes you a good fit at Natten?</label>
        <textarea id="goodfit" name="goodfit"></textarea>

        <label>Resume</label>
        <input
          type="file"
          id="resume"
          name="resume"
          accept=".pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ></input>

        <div>
          <label>
            By checking this box, you agree to our{" "}
            <a href="/legal#JobAppTOA">application terms of use</a>.{" "}
          </label>
          <input type="checkbox" name="agree" id="agree" required></input>
        </div>
        <input id="appsubmit" type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default Application;
