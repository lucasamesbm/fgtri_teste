import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo_FGTRI_branco.png";

const mobileMenu = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary">
      <div className="mx-auto max-w-screen-2xl flex items-center justify-between px-4 lg:px-6 py-4 font-montserrat">
        <img src={logo} alt="FGTRI logo" className="h-16 lg:h-22" />

        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-7 font-bold text-light text-base tracking-wider uppercase">
            <li>
              <a href="#" className="hover:text-secondary transition-colors">
                Início
              </a>
            </li>

            <li className="relative group">
              <span className="cursor-pointer hover:text-secondary transition-colors">
                Federação
              </span>

              <ul className="absolute top-full left-0 mt-4 w-56 bg-primary p-4 rounded-md shadow-lg flex flex-col gap-3 text-md font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <li>
                  <a href="#" className="hover:text-secondary">
                    Diretoria
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary">
                    Estatuto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary">
                    Equipes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary">
                    Federar-se
                  </a>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <span className="cursor-pointer hover:text-secondary transition-colors">
                Regulamento
              </span>

              <ul className="absolute top-full left-0 mt-4 w-56 bg-primary p-4 rounded-md shadow-lg flex flex-col gap-3 text-md font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <li>
                  <a href="#" className="hover:text-secondary">
                    Taxas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary">
                    Campeonato Estadual
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary">
                    Regras de Competição
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="hover:text-secondary transition-colors">
                Calendário
              </a>
            </li>

            <li className="relative group">
              <span className="cursor-pointer hover:text-secondary transition-colors">
                Resultados
              </span>

              <ul className="absolute top-full left-0 mt-4 w-56 bg-primary p-4 rounded-md shadow-lg flex flex-col gap-3 text-md font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <li>
                  <a href="#" className="hover:text-secondary">
                    Provas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary">
                    Campeonato Estadual
                  </a>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <span className="cursor-pointer hover:text-secondary transition-colors">
                Atletas
              </span>

              <ul className="absolute top-full left-0 mt-4 w-56 bg-primary p-4 rounded-md shadow-lg flex flex-col gap-3 text-md font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <li>
                  <a href="#" className="hover:text-secondary">
                    Escolinha
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="hover:text-secondary">
                Técnicos
              </a>
            </li>
          </ul>

          <a
            className="bg-secondary text-light px-5 py-2 font-bold text-lg tracking-wider hover:bg-hovers transition-colors"
            href="#"
          >
            Federar-se Agora!
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-light text-3xl"
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenu}
            initial="hidden"
            animate="show"
            exit="exit"
            className="lg:hidden bg-primary"
          >
            <ul className="flex flex-col gap-5 font-bold text-light text-base tracking-wider pt-6 px-6 uppercase">
              <li>
                <a onClick={() => setMenuOpen(false)} href="#">
                  Início
                </a>
              </li>

              <li>
                <span>Federação</span>

                <ul className="mt-4 ml-4 flex flex-col gap-4 text-sm font-medium">
                  <li>
                    <a href="#">Diretoria</a>
                  </li>
                  <li>
                    <a href="#">Estatuto</a>
                  </li>
                  <li>
                    <a href="#">Equipes</a>
                  </li>
                  <li>
                    <a href="#">Federar-se</a>
                  </li>
                </ul>
              </li>

              <li>
                <span>Regulamento</span>

                <ul className="mt-4 ml-4 flex flex-col gap-4 text-sm font-medium">
                  <li>
                    <a href="#">Taxas</a>
                  </li>
                  <li>
                    <a href="#">Campeonato Estadual</a>
                  </li>
                  <li>
                    <a href="#">Regras de Competição</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">Calendário</a>
              </li>
              <li>
                <span>Resultados</span>

                <ul className="mt-4 ml-4 flex flex-col gap-4 text-sm font-medium">
                  <li>
                    <a href="#">Provas</a>
                  </li>
                  <li>
                    <a href="#">Campeonato Estadual</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Atletas</span>

                <ul className="mt-4 ml-4 flex flex-col gap-4 text-sm font-medium">
                  <li>
                    <a href="#">Escolinha</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Técnicos</a>
              </li>
            </ul>

            <a
              href="#"
              className="mx-6 my-6 block text-center bg-secondary text-light px-5 py-3 font-bold tracking-wider hover:bg-hovers transition-colors"
            >
              Federar-se Agora!
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
