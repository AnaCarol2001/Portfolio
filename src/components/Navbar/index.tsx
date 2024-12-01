import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import Button from "../ui/Button";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isNavOpen, setIsNavOpen] = useState(false);

  if (isMobile) {
    return (
      <header className="z-50 fixed w-full glass flex justify-between items-center p-3 rounded-b-xl">
        <a href="#" className="font-poppins font-bold text-main-purple ">
          AnaCarolina
        </a>
        <div className="flex gap-4 items-center">
          <form>
            <select
              name="language"
              id="language"
              className="w-[4.5ch] bg-transparent border border-black rounded-md cursor-pointer"
            >
              <option value="English">EN</option>
              <option value="Portuguese-BR">PT-BR</option>
            </select>
          </form>

          <AnimatePresence>
            {isNavOpen && (
              <motion.nav
                id="main-nav"
                className=" absolute top-0 right-0 bg-black w-full max-w-[80vw] h-screen pt-20 p-5"
                initial={{ x: "50%" }}
                animate={{ x: "10%" }}
                exit={{ x: "110%" }}
              >
                <ul className="text-white font-poppins font-semibold text-5xl space-y-5">
                  <li>
                    <a className="active:text-main-purple" href="#about">
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a className="active:text-main-purple" href="#projects">
                      Projetos
                    </a>
                  </li>
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
          <Button.Hamburger
            isNavOpen={isNavOpen}
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-controls="main-nav"
            aria-expanded={isNavOpen ? "true" : "false"}
          />
        </div>
      </header>
    );
  }

  return (
    <header className="glass z-50 fixed top-0 left-0 right-0 max-w-6xl mx-auto flex items-center justify-between py-4 px-8 rounded-b-3xl text-lg">
      <a href="#" className="font-poppins font-bold text-main-purple ">
        AnaCarolina
      </a>
      <nav id="main-nav" className="font-semibold">
        <ul className="flex gap-8">
          <li>
            <a className="active:text-main-purple" href="#about">
              Sobre
            </a>
          </li>
          <li>
            <a className="active:text-main-purple" href="#projects">
              Projetos
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center justify-between  gap-6">
        <form>
          <select
            name="language"
            id="language"
            className="w-[4.5ch] bg-transparent border border-black rounded-md cursor-pointer"
          >
            <option value="English">EN</option>
            <option value="Portuguese-BR">PT-BR</option>
          </select>
        </form>
        <a
          href="mailto:"
          className="border border-main-purple py-2 px-4 rounded-lg font-bold text-main-purple"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}
