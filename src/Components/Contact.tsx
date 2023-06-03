import { useRef } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

interface CProps {
  title: string;
  style: string;
  border: boolean;
}

const Contact: React.FC<CProps> = (props) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const converted: string | HTMLFormElement = form.current as
      | string
      | HTMLFormElement;

    emailjs
      .sendForm(
        "service_jda4vjv",
        "template_87sk7kl",
        converted,
        "lzzUXSyeUjhEP14bp"
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          if (form.current !== null) {
            form.current.reset();
          }
          alert("Message sent successfully.");
        },
        (error: EmailJSResponseStatus) => {
          console.log(error.text);
          alert(
            "There was an error sending your message. Please try again later."
          );
        }
      );
  };

  return (
    <div
      className={`contact ${props.style === "light" ? "" : "darkMode"} ${
        props.border ? "borderBottom" : ""
      }`}
    >
      <h1 id="contactSection">{props.title}</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <input
            id="nameInput"
            className="textinput"
            type="text"
            name="from_name"
            placeholder="Name"
            required
          />
          <input
            id="emailInput"
            className="textinput"
            type="email"
            name="from_email"
            placeholder="Email"
            required
          />
        </div>
        <textarea
          id="messageInput"
          name="message"
          placeholder="Message"
          required
        />
        <br></br>
        <input className="contactSubmitButton" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
