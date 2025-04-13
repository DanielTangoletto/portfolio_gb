import React from "react";
import Github from "../../assets/images/Github.png";
import LinkedIn from "../../assets/images/Linkdin.png";

const Socials = () => {
  return (
    <div className="socials">
      <footer>
        <a
          href="https://github.com/DanielTangoletto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="icone github" />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-tangoletto-823210215/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedIn} alt="icone linkedin" />
        </a>
      </footer>
    </div>
  );
};

export default Socials;
