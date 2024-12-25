import LangSwitcher from "@components/Navbar/LangSwitcher";
import Button from "@components/ui/Button";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const NavbarVariants = {
  hidden: { y: "-100%" },
  visible: { y: 0 },
};

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { t } = useTranslation();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() || 0;

    if (current > previous && current > 150 && !isNavOpen) {
      setIsHidden(true);
    } else setIsHidden(false);
  });

  return (
    <motion.header
      animate={isHidden ? "hidden" : "visible"}
      onFocusCapture={() => setIsHidden(false)}
      variants={NavbarVariants}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-50 mx-1 max-w-6xl pt-1 md:mx-4 md:pt-2 xl:mx-auto"
    >
      <div className="flex items-center justify-between rounded-md bg-white px-4 py-2 md:rounded-xl md:px-8 md:py-4 md:text-lg">
        <a href="#" className="font-poppins font-bold text-main-purple">
          AnaCarolina
        </a>
        <div className="flex items-center gap-4">
          <LangSwitcher />
          <Button.Hamburger
            isNavOpen={isNavOpen}
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-controls="main-nav"
            aria-expanded={isNavOpen ? "true" : "false"}
          />
          <AnimatePresence>
            {isNavOpen && (
              <motion.nav
                id="main-nav"
                className="fixed -top-1 bottom-0 right-0 h-screen w-full max-w-[80vw] bg-black p-5 pt-20 md:-top-2"
                initial={{ x: "50%" }}
                animate={{ x: "10%" }}
                exit={{ x: "110%" }}
              >
                <ul className="space-y-5 font-poppins text-5xl font-semibold capitalize text-white">
                  <li>
                    <a
                      className="active:text-main-purple"
                      href="#about"
                      onClick={() => setIsNavOpen(false)}
                    >
                      {t("links.about")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="active:text-main-purple"
                      href="#projects"
                      onClick={() => setIsNavOpen(false)}
                    >
                      {t("links.projects")}
                    </a>
                  </li>
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
