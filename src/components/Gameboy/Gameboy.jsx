import React from "react";
import GBScreen from "../GBScreen/GBScreen";
import GBP from "../GBPlayer/GBPlayer";
import Logo from "../../assets/images/gbasp_logo.png";
import Button from "../../assets/images/A Button.png";

const Gameboy = () => {
  return (
    <div className="gameboy">
      <main>
        <div className="bloc_one"></div>
        <div className="bloc_two"></div>
        <img src={Logo} className="bloc_four" alt="" />
        <GBScreen />
        <div className="a_btn">
          <img src={Button} id="clic_btn" alt="" />
          <p>Cliquez ou appuyez sur Espace</p>
        </div>
        <GBP />
      </main>
    </div>
  );
};

export default Gameboy;
