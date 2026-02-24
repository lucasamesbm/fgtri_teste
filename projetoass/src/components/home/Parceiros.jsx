import { motion } from "framer-motion"

import comite from "../../assets/images/comite_olimpico_br.png"
import itu from "../../assets/images/International_Triathlon_Union.png"
import tribrasil from "../../assets/images/tri_brasil.png"
import transicaoPB from "../../assets/images/transicao_p_b.png"
import transicaoBP from "../../assets/images/transicao_b_p.png"

const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 4.0,
    transition: { duration: 1.0, ease: "easeOut" },
  },
}

function Parceiros() {
  return (
    <section className="bg-light font-montserrat">

      <img src={transicaoPB} className="w-full block" />

      <div className="py-16 lg:py-20">
        <div className="mx-auto max-w-screen-2xl px-4 lg:px-6 flex flex-col">

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-primary text-center">
            NOSSOS PARCEIROS
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-12 sm:gap-16 lg:gap-24 pt-10 lg:pt-12">

            <motion.img
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              src={comite}
              alt="Comitê Olímpico"
              className="h-16 sm:h-20 lg:h-28 object-contain opacity-85 hover:opacity-100 hover:scale-105 transition"
            />

            <motion.img
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              src={itu}
              alt="ITU"
              className="h-16 sm:h-20 lg:h-28 object-contain opacity-85 hover:opacity-100 hover:scale-105 transition"
            />

            <motion.img
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              src={tribrasil}
              alt="Tri Brasil"
              className="h-16 sm:h-20 lg:h-28 object-contain opacity-85 hover:opacity-100 hover:scale-105 transition"
            />

          </div>

        </div>
      </div>

      <img src={transicaoBP} className="w-full block" />

    </section>
  )
}

export default Parceiros