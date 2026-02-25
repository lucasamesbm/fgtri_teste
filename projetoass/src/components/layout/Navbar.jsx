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
          <ul className="flex gap-7 font-bold text-light text-base tracking-wider">
            {[
              "INÍCIO",
              "FEDERAÇÃO",
              "REGULAMENTO",
              "CALENDÁRIO",
              "RESULTADOS",
              "ATLETAS",
              "TÉCNICOS",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-secondary transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a
            className="bg-secondary text-light px-5 py-2 font-bold text-lg tracking-wider hover:bg-hovers transition-colors" href="#"
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
            <ul className="flex flex-col gap-5 font-bold text-light text-base tracking-wider pt-6 px-6">
              {[
                "INÍCIO",
                "FEDERAÇÃO",
                "REGULAMENTO",
                "CALENDÁRIO",
                "RESULTADOS",
                "ATLETAS",
                "TÉCNICOS",
              ].map((item) => (
                <li key={item}>
                  <a onClick={() => setMenuOpen(false)} href="#">
                    {item}
                  </a>
                </li>
              ))}
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