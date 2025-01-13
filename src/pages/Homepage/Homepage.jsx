import React from "react";
import Gameboy from "../../components/Gameboy/Gameboy";
import Socials from "../../components/Socials/Socials";
import Arrow from "../../assets/images/Arrow.png";

const Homepage = () => {
  return (
    <>
      <div className="gradient_bg"></div>
      <div className="homepage">
        <header>
          <ul>
            <li>
              <img id="arrow_one" src={Arrow} alt="" />
              Qui suis-je ?
            </li>
            <li>
              <img id="arrow_two" src={Arrow} alt="" />
              Mes projets
            </li>
            <li>
              <img id="arrow_three" src={Arrow} alt="" />
              Me contacter
            </li>
          </ul>
        </header>
        <Gameboy />
        <Socials />
      </div>
    </>
  );
};

export default Homepage;
