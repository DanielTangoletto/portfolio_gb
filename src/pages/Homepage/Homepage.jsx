import Gameboy from "../../components/Gameboy/Gameboy";
import PokemonCries from "../../components/PokemonCries/PokemonCries";
import Socials from "../../components/Socials/Socials";

const Homepage = () => {
  return (
    <>
      <div className="gradient_bg"></div>
      <div className="homepage">
        <header>
          <ul>
            <li>
              <a href="../about">A propos de moi</a>
            </li>
            <li>
              <a href="https://cvdesignr.com/p/64915e4f39233" target="blank">
                Voir mon CV
              </a>
            </li>
            <li>
              <a href="mailto:daniel.tangoletto@live.fr">Me contacter</a>
            </li>
          </ul>
        </header>
        <Gameboy />
        <PokemonCries />
        <Socials />
      </div>
    </>
  );
};

export default Homepage;
