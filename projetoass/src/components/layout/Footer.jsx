import logo from "../../assets/images/logo_FGTRI.png"
import instagramIcon from "../../assets/images/icons8-instagram-24.png"

function Footer() {
  return (
    <footer className="bg-primary text-light font-montserrat pt-12">

      <div className="mx-auto max-w-screen-2xl px-4 lg:px-6 pb-12">

        {/* Conteúdo principal */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">

          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={logo}
              alt="FGTRI"
              className="h-36 w-auto"
            />
          </div>

          {/* Links + Contato */}
          <div className="grid grid-cols-2 gap-10 lg:flex lg:gap-20">

            {/* Links */}
            <div className="flex flex-col">
              <h4 className="text-lg font-bold tracking-wide pb-3">
                Links Rápidos
              </h4>

              <ul className="flex flex-col gap-3 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-secondary transition">Início</a></li>
                <li><a href="#" className="hover:text-secondary transition">Eventos</a></li>
                <li><a href="#" className="hover:text-secondary transition">Resultados</a></li>
                <li><a href="#" className="hover:text-secondary transition">Seja Federado</a></li>
              </ul>
            </div>

            {/* Contato */}
            <div className="flex flex-col">
              <h4 className="text-lg font-bold tracking-wide pb-3">
                Contato
              </h4>

              <ul className="flex flex-col gap-3 text-gray-300 text-sm">
                <li>
                  E-mail:{" "}
                  <span className="text-secondary">fgtri@fgtri.org.br</span>
                </li>
                <li>Tel: (51) 99135-9080</li>
                <li>Redes Sociais: <span className="text-secondary">@fgtrirs</span></li>
                <li>
                  <img
                    src={instagramIcon}
                    alt="Instagram"
                    className="mt-2 h-6"
                  />
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>

      {/* Linha inferior */}
      <div className="border-t border-white/10 py-5 text-center px-4">
        <p className="text-sm text-gray-400">
          © 2026 Federação Gaúcha de Triathlon. Todos os direitos reservados.
        </p>
      </div>

    </footer>
  )
}

export default Footer
