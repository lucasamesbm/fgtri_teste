import federacaoImg from "../../assets/images/fotorun_bw.jpg"

function Federacao() {
  return (
    <section className="bg-light py-16 lg:py-24">
      
      {/* Container central */}
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-6">
        
        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 justify-start lg:justify-center">
          
          {/* Imagem (desktop apenas) */}
          <div className="hidden lg:block lg:max-w-lg">
            <img
              src={federacaoImg}
              alt="Federação"
              className="w-full h-95 object-cover"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col items-start gap-6 max-w-xl font-montserrat text-left">
            
            <h3 className="text-secondary border border-secondary px-3 py-1 font-semibold">
              Federação Gaúcha de Triathlon
            </h3>

            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              EXCELÊNCIA EM CADA TRANSIÇÃO
            </h2>

            <p className="text-dark leading-relaxed">
              A Federação Gaúcha de Triathlon (FGTri) é a entidade responsável
              por regulamentar e desenvolver o Triathlon e suas variações no
              Rio Grande do Sul. Sua missão é fomentar o esporte, garantindo
              organização, igualdade de regras, incentivo aos atletas e suporte
              para competições estaduais, nacionais e internacionais.
            </p>

            <a
              href="#"
              className="bg-secondary text-white px-6 py-3 font-bold tracking-wide hover:bg-hovers transition"
            >
              Saiba mais sobre nós
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Federacao