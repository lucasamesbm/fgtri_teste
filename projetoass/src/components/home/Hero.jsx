import { motion } from "framer-motion";
import heroImage from "../../assets/images/heroimage.jpeg";

const itemUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const itemLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      className="relative h-dvh mt-10 bg-cover bg-center lg:mt-5"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-[rgba(10,20,30,0.7)]" />

      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 lg:px-6 h-full">
        <div className="flex h-full items-end pb-20 lg:items-center lg:justify-center lg:pb-0">
          <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 text-light  items-start lg:items-center justify-center text-left">
            <motion.div
              variants={itemLeft}
              initial="hidden"
              animate="show"
              className="max-w-xl lg:hidden"
            >
              <span className="inline-block mb-4 px-4 py-1 border border-secondary text-secondary text-sm font-semibold tracking-wider">
                TEMPORADA 2026 ABERTA
              </span>

              <h1 className="font-bold leading-tight text-[clamp(2.5rem,5vw,4rem)]">
                SUPERE SEUS <br />
                <span className="text-secondary">LIMITES</span> NO <br />
                SUL.
              </h1>
            </motion.div>

            <motion.div
              variants={itemUp}
              initial="hidden"
              animate="show"
              className="hidden lg:block max-w-xl"
            >
              <span className="inline-block mb-4 px-4 py-1 border border-secondary text-secondary text-sm font-semibold tracking-wider">
                TEMPORADA 2026 ABERTA
              </span>

              <h1 className="font-bold leading-tight text-[clamp(2.5rem,5vw,4rem)]">
                SUPERE SEUS <br />
                <span className="text-secondary">LIMITES</span> NO <br />
                SUL.
              </h1>
            </motion.div>

            <motion.div
              variants={itemUp}
              initial="hidden"
              animate="show"
              className="max-w-lg mb-4 lg:mb-8"
            >
              <p className="text-lg leading-relaxed mb-6">
                A <b>Federação Gaúcha de Triathlon</b> une atletas, técnica e
                paixão para elevar o esporte no Rio Grande do Sul ao nível
                mundial.
              </p>

              <div className="flex gap-4 flex-col sm:flex-row">
                <a className="bg-secondary px-6 py-3 font-bold text-light">
                  Ver Calendário
                </a>
                <a className="border-2 border-white px-6 py-3 font-bold">
                  Federar-se
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
