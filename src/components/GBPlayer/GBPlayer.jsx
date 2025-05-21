import { useEffect, useRef } from "react";
import GBPlayer from "../../assets/videos/intro_gb.mp4";

const GBP = () => {
  const videoRef = useRef(null);
  const whiteScreenRef = useRef(null);

  useEffect(() => {
    const handleInteraction = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }

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
        videoRef.current.classList.add("hidden");
      }
      if (whiteScreenRef.current) {
        whiteScreenRef.current.classList.add("hidden");
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.volume = 0.3; // Volume à 30%
      videoElement.addEventListener("click", handleInteraction);
      videoElement.addEventListener("ended", handleVideoEnd);
    }
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("click", handleInteraction);
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <div className="white_screen" ref={whiteScreenRef}></div>{" "}
      <video className="nintendo" ref={videoRef} autoPlay>
        <source src={GBPlayer} type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>
    </div>
  );
};

export default GBP;
