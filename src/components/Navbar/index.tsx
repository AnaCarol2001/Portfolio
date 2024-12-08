import { useState } from "react";
import useMediaQuery from "@hooks/useMediaQuery";
import Button from "../ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LangSwitcher from "@components/Navbar/langSwitcher";

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { t } = useTranslation();

  if (isMobile) {
    return (
      <header className="glass fixed z-50 flex w-full items-center justify-between rounded-b-xl p-3">
        <a href="#" className="font-poppins font-bold text-main-purple">
          AnaCarolina
        </a>
        <div className="flex items-center gap-4">
          <LangSwitcher />

          <AnimatePresence>
            {isNavOpen && (
              <motion.nav
                id="main-nav"
                className="absolute right-0 top-0 h-screen w-full max-w-[80vw] bg-black p-5 pt-20"
                initial={{ x: "50%" }}
                animate={{ x: "10%" }}
                exit={{ x: "110%" }}
              >
                <ul className="space-y-5 font-poppins text-5xl font-semibold text-white">
                  <li>
                    <a className="active:text-main-purple" href="#about">
                      {t("links.about")}
                    </a>
                  </li>
                  <li>
                    <a className="active:text-main-purple" href="#projects">
                      {t("links.projects")}
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
    <header className="glass fixed left-0 right-0 top-0 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-b-3xl px-8 py-4 text-lg">
      <a href="#" className="font-poppins font-bold text-main-purple">
        AnaCarolina
      </a>
      <nav id="main-nav" className="font-semibold">
        <ul className="flex gap-8">
          <li>
            <a className="active:text-main-purple" href="#about">
              {t("links.about")}
            </a>
          </li>
          <li>
            <a className="active:text-main-purple" href="#projects">
              {t("links.projects")}
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center justify-between gap-6">
        <LangSwitcher />

        <a
          href="mailto:"
          className="rounded-lg border border-main-purple px-4 py-2 font-bold text-main-purple"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}
