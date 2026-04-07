import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fadeInAnimation = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

function CalendarioProvas() {
  const [provas, setProvas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/provas")
      .then((res) => res.json())
      .then((data) => {
        // 👇 ajuste das distâncias (string → array)
        const formatado = data.map((prova) => ({
          ...prova,
          distancias: prova.distancias
            ? prova.distancias.split(" / ")
            : [],
        }));

        setProvas(formatado);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="w-full px-4 pt-12 bg-gray-100 md:pt-16 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1
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
                {provas.map((prova) => (
                  <tr
                    key={prova.id}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4 align-top">
                      <span className="font-semibold text-secondary">
                        {new Date(prova.data).toLocaleDateString("pt-BR")}
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
                        target="_blank"
                        rel="noreferrer"
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

          <div className="mt-6 text-center text-sm text-gray-500 md:hidden">
            <p>Deslize para ver a tabela completa →</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CalendarioProvas;