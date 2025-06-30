import { useState } from "react";
import Screen from "../../assets/images/screen_example.png";
import ScreenBlue from "../../assets/images/screen_example_blue.png";
import BlocDialogue from "../../assets/images/bloc_dialogue.png";
import BlocDialogueMiddle from "../../assets/images/bloc_dialogue_middle.png";
import BlocDialogueLarge from "../../assets/images/bloc_dialogue_large.png";
import BlocDialogueXLarge from "../../assets/images/bloc_dialogue_x-large.png";
import RedArrow from "../../assets/images/red_arrow_down.png";
import Ellipse from "../../assets/images/ellipse.png";
import Oak from "../../assets/images/oak_gif.gif";
import Leclerc from "../../assets/images/logo_leclerc.png";
import OCLogo from "../../assets/images/logo_open.png";
import Pokeball from "../../assets/images/balls/pokeball.png";
import Superball from "../../assets/images/balls/superball.png";
import Hyperball from "../../assets/images/balls/hyperball.png";

function GBScreen() {
  const [visibleSections, setVisibleSections] = useState([true, true, true, true, true, true]);

  const toggleVisibility = (index) => {
    setVisibleSections((prev) =>
      prev.map((isVisible, i) => (i === index ? !isVisible : isVisible))
    );
  };
  return (
    <div className="screens">
      {/* Section 1 */}
      {visibleSections[0] && (
        <section className="screen_one" onClick={() => toggleVisibility(0)}>
          <img src={Screen} className="screen_example" alt="screen pokemon intro" />
          <img src={BlocDialogue} className="dial_norm" alt="Bloc Dialogue" />
          <p>Oh hey, salut moi c’est Daniel Tangoletto, développeur Front-End !</p>
          <img src={RedArrow} className="red_arrow" alt="Red Arrow" />
          <img src={Ellipse} className="ellipse" alt="Ellipse" />
          <img src={Oak} className="oak" alt="Oak GIF" />
        </section>
      )}

      {/* Section 2 */}
      {visibleSections[1] && (
        <section className="screen_two" onClick={() => toggleVisibility(1)}>
          <img src={Screen} className="screen_example" alt="screen pokemon intro" />
          <img src={BlocDialogueLarge} className="dial_large" alt="Bloc Dialogue_Large" />
          <p>
            Après plusieurs années à travailler dans la grande distribution, mon choix s'est orienté
            sur une reconversion professionnelle vers le développement web.
          </p>
          <img src={Leclerc} className="logo_leclerc" alt="Logo Leclerc" />
          <img src={RedArrow} className="red_arrow" alt="Red Arrow" />
          <img src={Ellipse} className="ellipse" alt="Ellipse" />
          <img src={Oak} className="oak" alt="Oak GIF" />
        </section>
      )}

      {/* Section 3 */}
      {visibleSections[2] && (
        <section className="screen_three" onClick={() => toggleVisibility(2)}>
          <img src={Screen} className="screen_example" alt="screen pokemon intro" />
          <img src={BlocDialogueMiddle} className="dial_middle" alt="Bloc Dialogue Middle" />
          <p>
            C'est un domaine qui me passionne beaucoup, c'est ainsi que j'ai suivi une formation
            avec OpenClassrooms.
          </p>
          <img src={OCLogo} className="logo_oc" alt="Logo OpenClassrooms" />
          <img src={RedArrow} className="red_arrow" alt="Red Arrow" />
          <img src={Ellipse} className="ellipse" alt="Ellipse" />
          <img src={Oak} className="oak" alt="Oak GIF" />
        </section>
      )}

      {/* Section 4 */}
      {visibleSections[3] && (
        <section className="screen_four" onClick={() => toggleVisibility(3)}>
          <img src={Screen} className="screen_example" alt="screen pokemon intro" />
          <img src={BlocDialogueXLarge} className="dial_xlarge" alt="Bloc Dialogue XLarge" />
          <p>
            Celle-ci m'a permis d'en apprendre plus sur les langages et techniques utilisés dans ce
            milieu. J’ai obtenu le diplôme tout récemment et je souhaiterais développer ces
            connaissances en entreprise.
          </p>
          <img src={RedArrow} className="red_arrow" alt="Red Arrow" />
          <img src={Oak} className="oak" alt="Oak GIF" />
        </section>
      )}

      {/* Section 5 */}
      {visibleSections[4] && (
        <section className="screen_five" onClick={() => toggleVisibility(4)}>
          <img src={Screen} className="screen_example" alt="screen pokemon intro" />
          <img src={BlocDialogue} className="dial_norm" alt="Bloc Dialogue" />
          <p>Voyons maintenant les projets que j’ai pu effectuer pendant et après ma formation.</p>
          <img src={RedArrow} className="red_arrow" alt="Red Arrow" />
          <img src={Ellipse} className="ellipse" alt="Ellipse" />
          <img src={Oak} className="oak" alt="Oak GIF" />
        </section>
      )}

      {/* Section 6 */}
      {visibleSections[5] && (
        <section className="screen_six">
          <img src={ScreenBlue} className="screen_example_blue" alt="screen pokemon intro" />
          <img src={BlocDialogue} className="dial_norm" alt="Bloc Dialogue" />
          <p>Choisissez parmi 3 projets à consulter.</p>
          <img src={RedArrow} className="red_arrow" alt="Red Arrow" />
          <div className="balls">
            <a
              href="https://alchemy-project-six.vercel.app/"
              className="pokeballs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Pokeball} alt="icon pokeball" />
            </a>
            <a
              href="https://storytime-seven.vercel.app/"
              className="pokeballs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Superball} alt="icon superball" />
            </a>
            <a
              href="https://db-yugioh-fr.vercel.app/"
              className="pokeballs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Hyperball} alt="icon hyperball" />
            </a>
          </div>
        </section>
      )}
    </div>
  );
}

export default GBScreen;
