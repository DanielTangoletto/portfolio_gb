import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
export default App;
