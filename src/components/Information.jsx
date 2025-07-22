import { Button } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Information = () => {
  return (
    <section className="d-flex flex-column justify-content-center p-4">
      <p className="fw-bold display-4 mb-3">Hi, Hi, I'm John Doe.</p>

      <p className="fs-5  text-opacity-75 mb-4">
        London-based freelance web developer specializing in crafting custom,
        responsive websites using Bootstrap, tailored to deliver modern and
        user-friendly designs.
      </p>

      <Button
        variant="primary"
        className="w-50 rounded-pill fw-bold text-dark shadow-sm mb-4"
      >
        I'm available
      </Button>

      <div className="d-flex align-items-center fs-3 gap-4">
        <FaFacebook />
        <FaXTwitter />
        <FaInstagram />
        <FaGithub />
      </div>
    </section>
  );
};

export default Information;
