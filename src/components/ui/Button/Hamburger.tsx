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
      className=" p-2 aspect-square"
      onClick={onClick}
      {...props}
    >
      <span className="sr-only">{isNavOpen ? "Close" : "Menu"}</span>
      <motion.div
        aria-hidden="true"
        className={`relative bg-black w-6 h-0.5`}
        initial="close"
        animate={isNavOpen ? "open" : "close"}
        variants={middleBarAnimation}
      >
        <motion.div
          className="absolute bg-black inset-0 translate-y-1.5"
          variants={topBarAnimation}
        ></motion.div>
        <motion.div
          className="absolute bg-black inset-0 -translate-y-1.5"
          variants={bottomBarAnimation}
        ></motion.div>
      </motion.div>
    </button>
  );
}
