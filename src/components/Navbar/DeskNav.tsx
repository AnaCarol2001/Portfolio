import LangSwitcher from "@components/Navbar/LangSwitcher";
import Button from "@components/ui/Button";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const NavbarVariants = {
  hidden: { y: "-100%" },
  visible: { y: 0 },
};

export default function DeskNav() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const { t } = useTranslation();

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() || 0;

    if (current > previous && current > 150) {
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
        <nav id="main-nav" className="font-semibold">
          <ul className="flex gap-8 capitalize">
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

          <Button.Action
            as="a"
            href="mailto:anacarolina2001.trabalho@gmail.com"
          >
            {t("contact")}
          </Button.Action>
        </div>
      </div>
    </motion.header>
  );
}
