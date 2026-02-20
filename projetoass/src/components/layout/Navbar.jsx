import { useEffect, useState } from "react"
import logo from "../../assets/images/logo_FGTRI_branco.png"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5)
      setMenuOpen(false) // fecha o menu ao scroll (UX melhor)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500
        bg-primary
        lg:${scrolled ? "bg-primary" : "bg-transparent"}`}>

      {/* HEADER */}
      <div className="mx-auto max-w-screen-2xl flex items-center justify-between px-4 lg:px-6 py-4 font-montserrat">
        
        {/* LOGO */}
        <img
          src={logo}
          alt="FGTRI logo"
          className="h-16 lg:h-22"
        />

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-7 font-bold text-light text-base tracking-wider">
            <li><a className="hover:text-secondary transition-discrete duration-400" href="#">INÍCIO</a></li>
            <li><a className="hover:text-secondary transition-discrete duration-400" href="#">FEDERAÇÃO</a></li>
            <li><a className="hover:text-secondary transition-discrete duration-400" href="#">REGULAMENTO</a></li>
            <li><a className="hover:text-secondary transition-discrete duration-400" href="#">CALENDÁRIO</a></li>
            <li><a className="hover:text-secondary transition-discrete duration-400" href="#">RESULTADOS</a></li>
            <li><a className="hover:text-secondary transition-discrete duration-400" href="#">ATLETAS</a></li>
            <li><a className="hover:text-secondary transition-discrete duration-400" href="#">TÉCNICOS</a></li>
          </ul>

          <a
            href="#"
            className="bg-secondary text-light px-5 py-2 font-bold text-lg tracking-wider hover:bg-hovers transition-discrete"
          >
            Federar-se Agora!
          </a>
        </div>

        {/* BOTÃO HAMBURGUER (MOBILE) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-light text-3xl focus:outline-none"
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div
  className={`lg:hidden bg-primary overflow-hidden
    transition-all duration-300 ease-in-out
    transform
    ${menuOpen
      ? "max-h-125 opacity-100 translate-y-0"
      : "max-h-0 opacity-0 -translate-y-4"}
  `}
>
  <ul className="flex flex-col gap-5 font-bold text-light text-base tracking-wider pt-6 px-6">
    <li><a onClick={() => setMenuOpen(false)} href="#">INÍCIO</a></li>
    <li><a onClick={() => setMenuOpen(false)} href="#">FEDERAÇÃO</a></li>
    <li><a onClick={() => setMenuOpen(false)} href="#">REGULAMENTO</a></li>
    <li><a onClick={() => setMenuOpen(false)} href="#">CALENDÁRIO</a></li>
    <li><a onClick={() => setMenuOpen(false)} href="#">RESULTADOS</a></li>
    <li><a onClick={() => setMenuOpen(false)} href="#">ATLETAS</a></li>
    <li><a onClick={() => setMenuOpen(false)} href="#">TÉCNICOS</a></li>
  </ul>

  <a
    href="#"
    className="mx-6 my-6 block text-center bg-secondary text-light px-5 py-3 font-bold tracking-wider hover:bg-hovers transition-discrete"
  >
    Federar-se Agora!
  </a>
</div>


      )}
    </nav>
  )
}

export default Navbar
