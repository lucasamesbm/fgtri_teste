import { motion } from "framer-motion";
import equipe1 from "../../assets/images/logo_GNG.png";
import equipe2 from "../../assets/images/iron_sul_.jpg";
import equipe3 from "../../assets/images/fs_logo_site.png";
import Dummy from "../../assets/images/dummy_.jpg";

const cardAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Equipes() {
  const equipes = [
    {
      id: 1,
      nome: "GRÊMIO NÁUTICO GAÚCHO",
      imagem: equipe1,
      alt: "Grêmio Náutico Gaúcho",
      conteudo: (
        <>
          <p>
            <span className="font-semibold">PRESIDENTE:</span> José Erni
            Severgnini De Souza
          </p>
          <p>
            <span className="font-semibold">Vice-presidente de esportes:</span>{" "}
            Raul Mendes Da Rocha
          </p>
          <p>
            <span className="font-semibold">Data de Filiação:</span> 22 de
            fevereiro de 2004
          </p>
          <p>Porto Alegre/RS</p>
          <p>(51) 3230.3000 – esportes@gngaucho.com.br</p>
        </>
      ),
    },
    {
      id: 2,
      nome: "IRONSUL",
      imagem: equipe2,
      alt: "Ironsul",
      conteudo: (
        <>
          <p>
            <span className="font-semibold">COORDENAÇÃO:</span> PROF. MARLOS
            RODRIGUES DOMINGUES
          </p>
          <p>
            <span className="font-semibold">Data de Filiação:</span> 28 de
            janeiro de 2012
          </p>
          <p>Rua Pedro Armando Gatti, 158</p>
          <p>Bairro Jardim do Sol – Rio Grande/RS – CEP 96216-080</p>
          <p>(53) 81250240 – (53) 32351413</p>
          <p>
            coriolis@vetorial.net / marlosufpel@gmail.com – www.ironsul.com.br
          </p>
        </>
      ),
    },
    {
      id: 3,
      nome: "FRANK SILVESTRIN - FS TEAM",
      imagem: equipe3,
      alt: "Frank Silvestrin - FS Team",
      conteudo: (
        <>
          <p>
            <span className="font-semibold">COORDENAÇÃO:</span> FRANK SILVESTRIN
          </p>
          <p>(51) 9335-4180</p>
          <p>http://fsteam.com.br/</p>
        </>
      ),
    },
  ];

  return (
    <section className="w-full px-4 py-12 bg-gray-100 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center text-2xl font-semibold tracking-widest mb-12 md:mb-16 lg:text-3xl text-black">
          EQUIPES FILIADAS
        </h1>

        <div className="flex flex-col gap-10 md:gap-16">
          {equipes.map((equipe, index) => (
            <motion.div
              key={equipe.id}
              variants={cardAnimation}
              initial="hidden"
              animate="show"
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-xl shadow-black/10 overflow-hidden border border-gray-200"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 p-6 flex justify-center items-center bg-gray-50">
                  <div className="w-48 md:w-56 rounded-xl border-4 border-light bg-light shadow-lg flex items-center justify-center p-2">
                    <div className="w-full h-auto max-h-48 md:max-h-56 overflow-hidden rounded-lg flex items-center justify-center">
                      <img
                        src={equipe.imagem || Dummy}
                        alt={equipe.alt}
                        className="w-full h-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                  <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4">
                    {equipe.nome}
                  </h2>
                  <div className="space-y-2 text-gray-700 text-sm md:text-base">
                    {equipe.conteudo}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Equipes;
