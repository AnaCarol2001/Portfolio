import { motion } from "framer-motion";

type Hamburger = {
  onClick: () => void;
  isNavOpen: boolean;
};

const middleBarAnimation = {
  close: { backgroundColor: "rgb(0, 0, 0)" },
  open: { backgroundColor: "none" },
};

const topBarAnimation = {
  close: { y: "6px", rotate: 0, backgroundColor: "rgb(0, 0, 0)" },
  open: { y: 0, rotate: "45deg", backgroundColor: "rgb(255, 255, 255)" },
};
const bottomBarAnimation = {
  close: { y: "-6px", rotate: 0, backgroundColor: "rgb(0, 0, 0)" },
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
        className={`relative h-0.5 w-6 bg-black`}
        initial="close"
        animate={isNavOpen ? "open" : "close"}
        variants={middleBarAnimation}
      >
        <motion.div
          className="absolute inset-0 translate-y-1.5 bg-black"
          variants={topBarAnimation}
        ></motion.div>
        <motion.div
          className="absolute inset-0 -translate-y-1.5 bg-black"
          variants={bottomBarAnimation}
        ></motion.div>
      </motion.div>
    </button>
  );
}
