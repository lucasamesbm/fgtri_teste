function Highlights() {
  return (
    <section className="relative bg-light">
      
      {/* Container central */}
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-6">
        
        {/* Cards */}
        <div
          className="
            flex flex-col lg:flex-row
            gap-8
            items-center lg:items-stretch
            justify-start lg:justify-center
            pt-12 lg:pt-0
            transform lg:-translate-y-10
          "
        >
          {/* Card 1 */}
          <div className="flex flex-col gap-4 p-8 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.15)] max-w-sm w-full">
            <h3 className="font-bold text-lg">
              CALENDÁRIO 2026
            </h3>

            <p>
              Confira todas as provas oficiais no Rio Grande do Sul.
            </p>

            <a href="#" className="mt-auto font-semibold">
              ACESSAR AGORA →
            </a>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 p-8 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.15)] max-w-sm w-full">
            <h3 className="font-bold text-lg">
              FILIAÇÃO ONLINE
            </h3>

            <p>
              Faça parte da elite do triathlon gaúcho hoje mesmo.
            </p>

            <a href="#" className="mt-auto font-semibold">
              ACESSAR AGORA →
            </a>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-4 p-8 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.15)] max-w-sm w-full">
            <h3 className="font-bold text-lg">
              RESULTADOS DE PROVAS
            </h3>

            <p>
              Acompanhe as provas e resultados da temporada.
            </p>

            <a href="#" className="mt-auto font-semibold">
              ACESSAR AGORA →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Highlights
