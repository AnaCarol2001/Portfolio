import { motion } from "framer-motion";

const DURATION = 0.3;
const STAGGER = 0.03;

export default function FlipWord({ text }: { text: string }) {
  const textArr = text.split("");
  const transition = {
    duration: DURATION,
    ease: "easeInOut",
    repeat: Infinity,
    repeatDelay: 3,
  };
  return (
    <motion.span
      initial="initial"
      whileInView="hover"
      viewport={{ amount: 1 }}
      className="relative inline-block overflow-hidden whitespace-nowrap"
    >
      <span className="block">
        {textArr.map((text, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: 0 },
              hover: {
                y: "-100%",
                transition: {
                  delay: STAGGER * i,
                  repeatType: "reverse",
                  ...transition,
                },
              },
            }}
            className="inline-block text-main-purple"
          >
            {text}
          </motion.span>
        ))}
      </span>
      <span className="absolute inset-0 block">
        {textArr.map((text, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: "100%" },
              hover: {
                y: 0,
                transition: {
                  delay: STAGGER * i,
                  repeatType: "reverse",
                  ...transition,
                },
              },
            }}
            className="inline-block"
          >
            {text}
          </motion.span>
        ))}
      </span>
    </motion.span>
  );
}
