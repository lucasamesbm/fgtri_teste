import comite from "../../assets/images/comite_olimpico_br.png"
import itu from "../../assets/images/International_Triathlon_Union.png"
import tribrasil from "../../assets/images/tri_brasil.png"
import transicaoPB from "../../assets/images/transicao_p_b.png"
import transicaoBP from "../../assets/images/transicao_b_p.png"

function Parceiros() {
  return (
    <section className="bg-light font-montserrat">

      {/* Transição topo */}
      <img
        src={transicaoPB}
        alt="Transição topo"
        className="w-full block"
      />

      {/* Conteúdo */}
      <div className="py-16 lg:py-20">
        <div className="mx-auto max-w-screen-2xl px-4 lg:px-6 flex flex-col">

          {/* Título */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-primary text-center">
            NOSSOS PARCEIROS
          </h1>

          {/* Logos */}
          <div className="flex items-center justify-center flex-wrap gap-12 sm:gap-16 lg:gap-24 pt-10 lg:pt-12">

            <img
              src={comite}
              alt="Comitê Olímpico"
              className="h-16 sm:h-20 lg:h-28 object-contain opacity-85 hover:opacity-100 hover:scale-105 transition"
            />

            <img
              src={itu}
              alt="ITU"
              className="h-16 sm:h-20 lg:h-28 object-contain opacity-85 hover:opacity-100 hover:scale-105 transition"
            />

            <img
              src={tribrasil}
              alt="Tri Brasil"
              className="h-16 sm:h-20 lg:h-28 object-contain opacity-85 hover:opacity-100 hover:scale-105 transition"
            />

          </div>

        </div>
      </div>

      {/* Transição fundo */}
      <img
        src={transicaoBP}
        alt="Transição fundo"
        className="w-full block"
      />

    </section>
  )
}

export default Parceiros
