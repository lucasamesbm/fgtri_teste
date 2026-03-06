import Presidente from "../../assets/images/PROF.-LUIZ-GOEBEL.jpg";
import Vice from "../../assets/images/PROF.-JORGE-GOEBEL.jpg";
import Concelheiro from "../../assets/images/PROF.-ROGERIO-SCHEIDT.jpg";
import Dummy from "../../assets/images/dummy_.jpg";
import PROFCARLOSAUGUSTOMANSKE from "../../assets/images/PROF.-CARLOS-AUGUSTO-MANSKE.jpg";
import PROFRODRIGOFERNANDESLOPES from "../../assets/images/PROF.-RODRIGO-FERNANDES-LOPES.jpg";
import SREVERTONJOCAPNEGRISCHERER from "../../assets/images/SR.-EVERTON-JOCAP-NEGRI-SCHERER.jpg";
import SRaSTEPHANIEMULDERPERRONE from "../../assets/images/SRa.-STEPHANIE-MULDER-PERRONE.jpg";
import PROFRICARDONILSON from "../../assets/images/PROF.-RICARDO-NILSON.jpg";
import SRMARIOLUISCOLPOMARCHESAN from "../../assets/images/SR.-MARIO-LUIS-COLPO-MARCHESAN.jpg";
import PROFWILSONROBERTORIBASDEMATTOS from "../../assets/images/PROF.-WILSON-ROBERTO-RIBAS-DE-MATTOS.jpg";

function DiretoriaSection() {
  const diretoria = [
    {
      id: 1,
      nome: "PROF. LUIZ GOEBEL",
      cargo: "PRESIDENTE",
      imagem: Presidente,
      alt: "Presidente",
    },
    {
      id: 2,
      nome: "PROF. JORGE GOEBEL",
      cargo: "VICE-PRESIDENTE",
      imagem: Vice,
      alt: "Vice-Presidente",
    },
  ];

  const conselhoFiscal = [
    {
      id: 1,
      nome: "SR. OSVALDO MARI",
      imagem: null,
      alt: "Conselheiro Fiscal1",
    },
    {
      id: 2,
      nome: "PROF. ROGÉRIO SCHEIDT",
      imagem: Concelheiro,
      alt: "Conselheiro Fiscal2",
    },
    {
      id: 3,
      nome: "PROF. PAULO ARMANDO BARCELLOS SARAIVA",
      imagem: null,
      alt: "Conselheiro Fiscal3",
    },
  ];

  const tribunal = [
    {
      id: 1,
      nome: "PROF. CARLOS AUGUSTO MANSKE",
      imagem: PROFCARLOSAUGUSTOMANSKE,
      alt: "Membro do Tribunal1",
    },
    {
      id: 2,
      nome: "PROF. RODRIGO FERNANDES LOPES",
      imagem: PROFRODRIGOFERNANDESLOPES,
      alt: "Membro do Tribunal2",
    },
    {
      id: 3,
      nome: "SR. EVERTON JOCAP NEGRI SCHERER",
      imagem: SREVERTONJOCAPNEGRISCHERER,
      alt: "Membro do Tribunal3",
    },
    {
      id: 4,
      nome: "SRª. STEPHANIE MULDER PERRONE",
      imagem: SRaSTEPHANIEMULDERPERRONE,
      alt: "Membro do Tribunal4",
    },
    {
      id: 5,
      nome: "DR. CÍCERO LUIZ DOS SANTOS",
      imagem: null,
      alt: "Membro do Tribunal5",
    },
    {
      id: 6,
      nome: "DR. ANDRÉ SILVA DA CRUZ",
      imagem: null,
      alt: "Membro do Tribunal6",
    },
    {
      id: 7,
      nome: "PROF. LUCIANO AVILA",
      imagem: null,
      alt: "Membro do Tribunal7",
    },
    {
      id: 8,
      nome: "PROF. RICARDO NILSON",
      imagem: PROFRICARDONILSON,
      alt: "Membro do Tribunal8",
    },
    {
      id: 9,
      nome: "SR. MARIO LUIS COLPO MARCHESAN",
      imagem: SRMARIOLUISCOLPOMARCHESAN,
      alt: "Membro do Tribunal9",
    },
  ];

  const tecnico = [
    {
      id: 1,
      nome: "PROF. WILSON ROBERTO RIBAS DE MATTOS",
      imagem: PROFWILSONROBERTORIBASDEMATTOS,
      alt: "Técnico de Triathlon",
    },
  ];

  const representante = [
    {
      id: 1,
      nome: "SR. MARIO LUIS COLPO MARCHESAN",
      imagem: SRMARIOLUISCOLPOMARCHESAN,
      alt: "Representante dos Atletas",
    },
  ];

  const MembroCard = ({ membro }) => (
    <div className="flex flex-col items-center gap-4">
      <div className="w-48 h-48 md:w-56 md:h-56 rounded-xl border-4 border-light bg-light shadow-xl shadow-black/20 flex items-center justify-center p-2">
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img
            src={membro.imagem || Dummy}
            alt={membro.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="text-center">
        <span className="block text-sm sm:text-base font-semibold text-secondary">
          {membro.cargo}
        </span>
        <span className="text-xs sm:text-sm text-black font-semibold mt-1">
          {membro.nome}
        </span>
      </div>
    </div>
  );

  return (
    <>
      <section className="w-full px-4 py-12 bg-gray-100 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl font-semibold tracking-widest mb-10 md:mb-12 lg:text-3xl">
            DIRETORIA
          </h2>

          <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 md:flex-row md:gap-40 lg:gap-80">
            {diretoria.map((membro) => (
              <MembroCard key={membro.id} membro={membro} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-12 bg-gray-200 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl font-semibold tracking-widest mb-10 md:mb-12 lg:text-3xl">
            CONSELHO FISCAL
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 justify-items-center">
            {conselhoFiscal.map((membro) => (
              <MembroCard key={membro.id} membro={membro} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-12 bg-gray-100 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl font-semibold tracking-widest mb-10 md:mb-12 lg:text-3xl">
            TRIBUNAL DE JUSTIÇA DESPORTIVA
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 justify-items-center">
            {tribunal.map((membro) => (
              <MembroCard key={membro.id} membro={membro} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-12 bg-gray-200 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl font-semibold tracking-widest mb-10 md:mb-12 lg:text-3xl">
            TÉCNICO DE TRIATHLON
          </h2>

          <div className="flex justify-center">
            {tecnico.map((membro) => (
              <MembroCard key={membro.id} membro={membro} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-12 bg-gray-100 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl font-semibold tracking-widest mb-10 md:mb-12 lg:text-3xl">
            REPRESENTANTE DOS ATLETAS
          </h2>

          <div className="flex justify-center">
            {representante.map((membro) => (
              <MembroCard key={membro.id} membro={membro} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default DiretoriaSection;
