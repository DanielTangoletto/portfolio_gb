import React from "react";
import Screen from "../../assets/images/screen_example.png";
import BlocDialogue from "../../assets/images/bloc_dialogue.png";
import BlocDialogueLarge from "../../assets/images/bloc_dialogue_large.png";
import RedArrow from "../../assets/images/red_arrow_down.png";
import Ellipse from "../../assets/images/ellipse.png";
import Oak from "../../assets/images/oak_gif.gif";
import Leclerc from "../../assets/images/logo_leclerc.png";

const GBScreen = () => {
  return (
    <div className="intro_one">
      <img src={Screen} className="screen_example" alt="" />
      <section className="screen_one">
        <img src={BlocDialogue} alt="Bloc Dialogue" />
        <p>Oh hey, salut moi c’est Daniel Tangoletto, developpeur React junior</p>
        <img src={RedArrow} className="red_arrow" alt="Red Arrow" />
        <img src={Ellipse} className="ellipse" alt="Ellipse" />
        <img src={Oak} className="oak" alt="Oak GIF" />
      </section>
      <section className="screen_two">
        <img src={BlocDialogueLarge} className="dial_large" alt="Bloc Dialogue_Large" />
        <p>
          Apres plusieurs annees a travailler dans la grande distribution, mon choix s'est oriente sur une reconversion professionnelle vers le developpement
          web.
        </p>
        <img src={Leclerc} className="logo_leclerc" alt="Logo Leclerc" />
        <img src={RedArrow} className="red_arrow" alt="Red Arrow" />
        <img src={Ellipse} className="ellipse" alt="Ellipse" />
        <img src={Oak} className="oak" alt="Oak GIF" />
      </section>
    </div>
  );
};

export default GBScreen;
