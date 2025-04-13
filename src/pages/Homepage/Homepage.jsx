import React from "react";
import Gameboy from "../../components/Gameboy/Gameboy";
import Socials from "../../components/Socials/Socials";

const Homepage = () => {
  return (
    <>
      <div className="gradient_bg"></div>
      <div className="homepage">
        <header>
          <ul>
            <li>
              <a href="https://danieltangoletto.github.io/dt_portfolio/" target="blank">1e Portfolio</a>
            </li>
            <li>
              <a href="https://cvdesignr.com/p/64915e4f39233?hl=fr_FR" target="blank">
                Voir mon CV
              </a>
            </li>
            <li>
              <a href="mailto:daniel.tangoletto@live.fr">Me contacter</a>
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
