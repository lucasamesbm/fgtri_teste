import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diretoria from "./pages/Diretoria";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/diretoria" element={<Diretoria />} />
    </Routes>
  );
}

export default App;
