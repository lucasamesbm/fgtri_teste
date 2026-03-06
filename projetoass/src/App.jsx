import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diretoria from "./pages/Diretoria";
import EquipePage from "./pages/Equipes";
import FormFederarPage from "./pages/FederarPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/diretoria" element={<Diretoria />} />
      <Route path="/equipes" element={<EquipePage />} />
      <Route path="/federarse" element={<FormFederarPage />} />
    </Routes>
  );
}

export default App;
