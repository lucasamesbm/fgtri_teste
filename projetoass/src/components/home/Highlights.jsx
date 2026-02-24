import { motion } from "framer-motion"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 40,
    x: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
}

const cardVariantMobile = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -40 : 40,
    y: 0,
  }),
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
}

export default function Highlights() {
  const isMobile = window.innerWidth < 1024

  return (
    <section className="relative bg-light">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-6">
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="
            flex flex-col lg:flex-row
            gap-8
            items-center lg:items-stretch
            justify-start lg:justify-center
            pt-12 lg:pt-0
            lg:-translate-y-10
          "
        >
          <motion.div
            custom="left"
            variants={isMobile ? cardVariantMobile : cardVariant}
            className="flex flex-col gap-4 p-8 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.15)] max-w-sm w-full"
          >
            <h3 className="font-bold text-lg">CALENDÁRIO 2026</h3>
            <p>Confira todas as provas oficiais no Rio Grande do Sul.</p>
            <a href="#" className="mt-auto font-semibold">
              ACESSAR AGORA →
            </a>
          </motion.div>

          <motion.div
            custom="right"
            variants={isMobile ? cardVariantMobile : cardVariant}
            className="flex flex-col gap-4 p-8 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.15)] max-w-sm w-full"
          >
            <h3 className="font-bold text-lg">FILIAÇÃO ONLINE</h3>
            <p>Faça parte da elite do triathlon gaúcho hoje mesmo.</p>
            <a href="#" className="mt-auto font-semibold">
              ACESSAR AGORA →
            </a>
          </motion.div>

          <motion.div
            custom="left"
            variants={isMobile ? cardVariantMobile : cardVariant}
            className="flex flex-col gap-4 p-8 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.15)] max-w-sm w-full"
          >
            <h3 className="font-bold text-lg">RESULTADOS DE PROVAS</h3>
            <p>Acompanhe as provas e resultados da temporada.</p>
            <a href="#" className="mt-auto font-semibold">
              ACESSAR AGORA →
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}