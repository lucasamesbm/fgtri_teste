import heroImage from "../../assets/images/heroimage.jpeg"

function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center pt-28 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(10,20,30,0.7)]" />

      {/* Container central */}
      <div className="relative z-10 mx-auto max-w-screen-2xl w-full px-4 lg:px-6 font-montserrat">
        
        {/* Conteúdo */}
        <div
          className="
            flex flex-col lg:flex-row
            gap-12 lg:gap-20
            text-white
            items-start lg:items-center
            justify-start lg:justify-center
          "
        >
          {/* Lado esquerdo */}
          <div className="max-w-xl text-left">
            <span className="inline-block mb-4 px-4 py-1 border border-secondary text-secondary text-sm font-semibold tracking-wider">
              TEMPORADA 2026 ABERTA
            </span>

            <h1 className="font-bold leading-tight text-[clamp(2.5rem,5vw,4rem)]">
              SUPERE SEUS <br />
              <span className="text-secondary">LIMITES</span> NO <br />
              SUL.
            </h1>
          </div>

          {/* Lado direito */}
          <div className="max-w-lg text-left">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
              A <b>Federação Gaúcha de Triathlon</b> une atletas, técnica e paixão
              para elevar o esporte no Rio Grande do Sul ao nível mundial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="bg-secondary text-white px-6 py-3 font-bold tracking-wide hover:bg-hovers transition"
              >
                Ver Calendário
              </a>

              <a
                href="#"
                className="border-2 border-white px-6 py-3 font-bold tracking-wide hover:bg-white hover:text-black transition"
              >
                Federar-se
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero