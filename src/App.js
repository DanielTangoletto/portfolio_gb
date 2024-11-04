import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/portfolio_gb" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
