import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diretoria from "./pages/Diretoria";
import EquipePage from "./pages/Equipes";
import FormFederarPage from "./pages/FederarPage";
import Taxa from "./pages/TaxasPage";
import CampEst from "./pages/CampEstPage";
import Regras from "./pages/RegrasPage";
import ProvasPage from "./pages/ProvasPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/diretoria" element={<Diretoria />} />
      <Route path="/equipes" element={<EquipePage />} />
      <Route path="/federarse" element={<FormFederarPage />} />
      <Route path="/taxas" element={<Taxa />} />
      <Route path="/campeonato_estadual" element={<CampEst />} />
      <Route path="/regras_de_competicao" element={<Regras />} />
      <Route path="/calendario" element={<ProvasPage />} />
    </Routes>
  );
}

export default App;
