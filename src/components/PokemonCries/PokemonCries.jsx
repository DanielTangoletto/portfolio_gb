import { useState } from "react";

const PokemonCries = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pokemonData, setPokemonData] = useState(null);
  const [frenchName, setFrenchName] = useState("");
  const volume = 0.2; // Volume fixé à 20%

  const localCries = {
    25: { url: "https://play.pokemonshowdown.com/audio/cries/pikachu.mp3", name: "Pikachu" },
  };

  const totalPokemon = 1025;
  const frenchNameCache = {};

  const getFrenchName = async (pokemonId) => {
    if (frenchNameCache[pokemonId]) return frenchNameCache[pokemonId];

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`);
      if (!response.ok) throw new Error("Données espèces non trouvées");

      const speciesData = await response.json();
      const frenchTranslation = speciesData.names.find((name) => name.language.name === "fr");
      const name = frenchTranslation ? frenchTranslation.name : speciesData.name;

      frenchNameCache[pokemonId] = name;
      return name;
    } catch (err) {
      console.error("Erreur de traduction:", err);
      return `Pokémon #${pokemonId}`;
    }
  };

  const playRandomPokemonCry = async () => {
    setIsLoading(true);
    setError(null);
    setPokemonData(null);
    setFrenchName("");

    try {
      const randomId = Math.floor(Math.random() * totalPokemon) + 1;

      if (localCries[randomId]) {
        const audio = new Audio(localCries[randomId].url);
        audio.volume = volume;
        await audio.play();
        setPokemonData({
          id: randomId,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomId}.png`,
        });
        setFrenchName(localCries[randomId].name);
        return;
      }

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}/`);
      if (!response.ok) throw new Error("Pokémon non trouvé");

      const pokemon = await response.json();
      const name = await getFrenchName(randomId);

      setPokemonData({
        id: randomId,
        sprite:
          pokemon.sprites.front_default ||
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomId}.png`,
      });
      setFrenchName(name);

      const cryUrl = pokemon.cries?.latest || pokemon.cries?.legacy;
      if (!cryUrl) throw new Error("Cri non disponible pour ce Pokémon");

      const audio = new Audio(cryUrl);
      audio.volume = volume;
      await audio.play();
    } catch (err) {
      setError(err.message);
      console.error("Erreur:", err);

      if (localCries[25]) {
        const audio = new Audio(localCries[25].url);
        audio.volume = volume;
        await audio.play();
        setPokemonData({
          id: 25,
          sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        });
        setFrenchName(localCries[25].name);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pokemon">
      {error && <p>⚠️ {error} (Utilisation d'un cri par défaut)</p>}

      {pokemonData && (
        <div className="cadre-pokemon">
          <img className="sprite-pokemon" src={pokemonData.sprite} alt={frenchName} />
          <p>#{pokemonData.id}</p>
          <p>{frenchName}</p>
        </div>
      )}
      <button onClick={playRandomPokemonCry} disabled={isLoading}>
        {isLoading ? "Chargement..." : "► Jouer un cri aléatoire"}
      </button>
    </div>
  );
};

export default PokemonCries;
