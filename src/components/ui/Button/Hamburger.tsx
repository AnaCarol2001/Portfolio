import { motion } from "framer-motion";

type Hamburger = {
  onClick: () => void;
  isNavOpen: boolean;
};

const middleBarAnimation = {
  close: {},
  open: { backgroundColor: "none" },
};

const topBarAnimation = {
  close: { y: "6px", rotate: 0 },
  open: { y: 0, rotate: "45deg", backgroundColor: "rgb(255, 255, 255)" },
};
const bottomBarAnimation = {
  close: { y: "-6px", rotate: 0 },
  open: { y: 0, rotate: "-45deg", backgroundColor: "rgb(255, 255, 255)" },
};

export default function Hamburger({ onClick, isNavOpen, ...props }: Hamburger) {
  return (
    <button
      type="button"
      className="aspect-square p-2"
      onClick={onClick}
      {...props}
    >
      <span className="sr-only">{isNavOpen ? "Close" : "Menu"}</span>
      <motion.div
        aria-hidden="true"
        className="relative z-10 h-0.5 w-6 shadow-inner shadow-main-purple/60"
        initial="close"
        animate={isNavOpen ? "open" : "close"}
        variants={middleBarAnimation}
      >
        <motion.div
          className="absolute inset-0 translate-y-1.5 shadow-inner shadow-main-purple/60"
          variants={topBarAnimation}
        ></motion.div>
        <motion.div
          className="absolute inset-0 -translate-y-1.5 shadow-inner shadow-main-purple/60"
          variants={bottomBarAnimation}
        ></motion.div>
      </motion.div>
    </button>
  );
}
