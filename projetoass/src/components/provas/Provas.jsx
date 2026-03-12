import { motion } from "framer-motion";

const fadeInAnimation = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

function CalendarioProvas() {
  const provas = [
    {
      data: "25/janeiro/2026",
      nome: "W70 TRIATHLON",
      local: "Caxias do Sul",
      descricao: "1ª ETAPA DO CAMPEONATO ESTADUAL",
      distancias: [
        "W70 - Peso 2: 1.6m Natação / 54km Ciclismo / 14.4Km Corrida",
        "SPRINT Peso 1,5: 800m Natação / 20km Ciclismo / 4.8Km Corrida",
        "MINI TRIATHLON: 400m Natação / 11km Ciclismo / 2.4Km Corrida",
      ],
      link: "https://app.sprinta.com.br/event/1686868f239901ea5e",
    },
    {
      data: "08/fevereiro/2026",
      nome: "AQUATHLON DO GUARDA-VIDAS",
      local: "Praia do Cassino - Rio Grande - RS",
      descricao: "CAMPEONATO ESTADUAL DE AQUATHLON",
      distancias: [
        "2Km Natação / 5Km Corrida",
        "1Km Natação / 5Km Corrida",
        "MINI: 500m Natação / 2.5Km Corrida",
      ],
      link: "https://fgtri.org.br/aquathlon-dos-bombeiros/",
    },
    {
      data: "08/março/2026",
      nome: "TRIATHLON PRAIA DO LARANJAL",
      local: "Pelotas - Praia do Laranjal",
      descricao: "2ª ETAPA DO CAMPEONATO ESTADUAL",
      distancias: [
        "SPRINT - Peso 1: 750m Natação / 20km Ciclismo / 5Km Corrida",
        "MINI TRIATHLON: 350m Natação / 10km Ciclismo / 2.5Km Corrida",
      ],
      link: "https://fgtri.org.br/inscricao_prova_triathlon-laranjal/",
    },
    {
      data: "22/março/2026",
      nome: "TRI SUL OSÓRIO",
      local: "Osório",
      descricao: "3ª ETAPA DO CAMPEONATO ESTADUAL",
      distancias: [
        "STANDARD - Peso 1,5: 1.500m Natação / 40km Ciclismo / 10Km Corrida",
        "SPRINT - Peso 1: 750m Natação / 20km Ciclismo / 5Km Corrida",
        "MINI TRIATHLON: 350m Natação / 10km Ciclismo / 2.5Km Corrida",
      ],
      link: "https://fgtri.org.br/triathlon-praia-do-larnla/",
    },
    {
      data: "17/maio/2026",
      nome: "TRI SUL PORTO ALEGRE",
      local: "Porto Alegre - Belém Novo",
      descricao: "4ª ETAPA DO CAMPEONATO ESTADUAL",
      distancias: [
        "TRIATHLON STANDARD - Peso 1,5: 1.500m Natação / 40km Ciclismo / 10Km Corrida",
        "SPRINT - Peso 1: 750m Natação / 20km Ciclismo / 5Km Corrida",
        "MINI TRIATHLON: 350m Natação / 10km Ciclismo / 2.5Km Corrida",
      ],
      link: "https://app.sprinta.com.br/event/9284567cf382a99340",
    },
    {
      data: "26/julho/2026",
      nome: "DUATHLON GOLD LAKE",
      local: "Porto Alegre",
      descricao: "CAMPEONATO ESTADUAL DE DUATHLON - 1ª ETAPA",
      distancias: [
        "5Km Corrida / 20km Ciclismo / 2.5Km Corrida",
        "MINI DUATHLON: 2.5Km Corrida / 10km Ciclismo / 2.5Km Corrida",
      ],
      link: "#",
    },
    {
      data: "28/setembro/2026",
      nome: "COPA SUL DE TRIATHLON",
      local: "Osório",
      descricao: "5ª ETAPA DO CAMPEONATO ESTADUAL",
      distancias: [
        "SPRINT - Peso 1: 750m Natação / 20km Ciclismo / 5Km Corrida",
        "MINI TRIATHLON: 350m Natação / 10km Ciclismo / 2.5Km Corrida",
      ],
      link: "#",
    },
  ];

  return (
    <section className="w-full px-4 py-12 bg-gray-100 md:py-16 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl font-semibold tracking-widest mb-12 md:mb-16 lg:text-3xl text-black"
        >
          CALENDÁRIO DE PROVAS 2026
        </h1>

        <motion.div
          variants={fadeInAnimation}
          initial="hidden"
          animate="show"
          className="bg-white rounded-xl shadow-xl shadow-black/10 p-6 md:p-8 border border-gray-200"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-250 border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="p-4 text-left font-semibold rounded-tl-lg">
                    DATA
                  </th>
                  <th className="p-4 text-left font-semibold">PROVA</th>
                  <th className="p-4 text-left font-semibold">LOCAL</th>
                  <th className="p-4 text-left font-semibold">DISTÂNCIAS</th>
                  <th className="p-4 text-left font-semibold rounded-tr-lg">
                    LINK
                  </th>
                </tr>
              </thead>
              <tbody>
                {provas.map((prova, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4 align-top">
                      <span className="font-semibold text-secondary">
                        {prova.data}
                      </span>
                    </td>
                    <td className="p-4 align-top">
                      <div className="font-bold text-gray-800">
                        {prova.nome}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {prova.descricao}
                      </div>
                    </td>
                    <td className="p-4 align-top">
                      <span className="text-gray-700">{prova.local}</span>
                    </td>
                    <td className="p-4 align-top">
                      <ul className="list-disc list-inside text-sm space-y-1">
                        {prova.distancias.map((dist, idx) => (
                          <li key={idx} className="text-gray-700">
                            {dist}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="p-4 align-top">
                      <a
                        href={prova.link}
                        className="inline-flex flex-col items-start space-y-1 text-secondary hover:text-hovers font-medium text-sm transition-colors group"
                      >
                        <span className="group-hover:underline">
                          INFORMAÇÕES
                        </span>
                        <span className="group-hover:underline">
                          REGULAMENTO
                        </span>
                        <span className="group-hover:underline">
                          INSCRIÇÕES
                        </span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legenda para mobile */}
          <div className="mt-6 text-center text-sm text-gray-500 md:hidden">
            <p>Deslize para ver a tabela completa →</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CalendarioProvas;
