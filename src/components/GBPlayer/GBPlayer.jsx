import React, { useEffect, useRef } from "react";
import GBPlayer from "../../assets/videos/intro_gb.mp4";

const GBP = () => {
  const videoRef = useRef(null);
  const whiteScreenRef = useRef(null); // Référence pour l'élément white_screen

  useEffect(() => {
    const handleInteraction = () => {
      if (videoRef.current) {
        videoRef.current.play(); // Démarrer la vidéo après un clic ou une pression sur la touche Espace
      }
      // Retirer l'écouteur d'événement après la première interaction
      videoRef.current.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleKeyPress);
    };

    const handleKeyPress = (event) => {
      if (event.code === "Space") {
        handleInteraction();
      }
    };

    const handleVideoEnd = () => {
      if (videoRef.current) {
        videoRef.current.classList.add("hidden"); // Masquer la vidéo
      }
      if (whiteScreenRef.current) {
        whiteScreenRef.current.classList.add("hidden"); // Masquer l'élément white_screen
      }
    };

    // Ajouter les écouteurs d'événement pour le clic et la touche Espace
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("click", handleInteraction);
      videoElement.addEventListener("ended", handleVideoEnd); // Écouter l'événement 'ended'
    }
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      // Nettoyage : enlever les écouteurs d'événement pour éviter les fuites de mémoire
      if (videoElement) {
        videoElement.removeEventListener("click", handleInteraction);
        videoElement.removeEventListener("ended", handleVideoEnd); // Nettoyer aussi l'écouteur 'ended'
      }
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <div className="white_screen" ref={whiteScreenRef}></div> {/* Référence pour white_screen */}
      <video className="nintendo" ref={videoRef} autoPlay>
        <source src={GBPlayer} type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>
    </div>
  );
};

export default GBP;
