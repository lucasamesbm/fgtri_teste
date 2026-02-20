import provaImg from "../../assets/images/fotorun_bw.jpg"

function Provas() {
  return (
    <section className="bg-primary py-16 font-montserrat overflow-hidden">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-6">

        {/* Título */}
        <h1 className="text-light text-3xl mb-8 font-bold">
          PRÓXIMAS PROVAS
        </h1>

        {/* Cards */}
        <div
          className="
            flex gap-6
            overflow-x-auto scroll-smooth
            snap-x snap-mandatory
            pb-4

            lg:overflow-visible
            lg:justify-center
            lg:gap-12
          "
        >
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="
                bg-light flex flex-col overflow-hidden
                min-w-70 max-w-[320px]
                snap-center
                lg:min-w-95 lg:max-w-95
              "
            >
              <img
                src={provaImg}
                alt="Prova"
                className="w-full h-55 object-cover"
              />

              <div className="p-6 flex flex-col gap-2">

                <p className="text-secondary text-sm font-bold">
                  25 MAIO 2024
                </p>

                <h2 className="text-xl font-semibold text-dark">
                  Triathlon de Inverno Gramado
                </h2>

                <span className="text-base font-medium">
                  Gramado, RS
                </span>

                <a
                  href="#"
                  className="mt-4 bg-secondary text-white px-5 py-2 font-bold tracking-wide hover:bg-hovers transition text-center"
                >
                  Ver detalhes
                </a>

              </div>
            </div>
          ))}
        </div>

        {/* Botão final */}
        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="border-2 border-white text-white px-6 py-3 font-bold tracking-wide hover:bg-white hover:text-black transition"
          >
            Ver Calendário Completo
          </a>
        </div>

      </div>
    </section>
  )
}

export default Provas
