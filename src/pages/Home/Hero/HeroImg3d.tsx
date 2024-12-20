import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";

export default function HeroImg3d() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleImgCardMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const { width, height } = rect;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // -0.5 to 0.5
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleImgCardMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleImgCardMouseMove}
      onMouseLeave={handleImgCardMouseLeave}
      style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
      className="relative order-1 aspect-square w-full max-w-64 rounded-xl border border-solid border-main-purple/50 bg-white/90 sm:max-w-xs lg:mr-10 lg:max-w-sm lg:rounded-2xl"
    >
      <motion.div
        initial={{ inset: 0 }}
        animate={{ inset: "var(--inset, 0)" }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(-50px)",
        }}
        aria-hidden="true"
        className="absolute rounded-xl border border-solid border-main-purple/60 bg-main-purple/10 shadow-md [--inset:-0.5rem] lg:rounded-2xl lg:[--inset:-0.75rem]"
      />
      <motion.div
        initial={{ inset: 0 }}
        animate={{ inset: "var(--inset, 0)" }}
        transition={{ duration: 0.5 }}
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(50px)",
        }}
        className="absolute [--inset:0.5rem] lg:[--inset:0.75rem]"
      >
        <img
          className="w-full rounded-xl object-cover lg:rounded-2xl"
          src="https://avatars.githubusercontent.com/u/62663206?v=4"
          alt="Ana Carolina"
          width={232}
          height={232}
        />
      </motion.div>
    </motion.div>
  );
}
