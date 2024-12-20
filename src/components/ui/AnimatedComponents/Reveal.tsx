import { ComponentProps, useCallback, useEffect } from "react";
import { useAnimate, useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface RevealProps extends ComponentProps<"div"> {
  bg?: "purple" | "white" | "none";
}

const RevealBgVariant: Record<NonNullable<RevealProps["bg"]>, string> = {
  purple: "bg-main-purple",
  white: "bg-white",
  none: "bg-transparent",
};

export default function Reveal({ children, bg = "purple" }: RevealProps) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, amount: 0.2 });

  const animationSequence = useCallback(async () => {
    let delay = 0.3;
    if (bg === "none") delay = 0;

    animate(
      "[data-animation_id='reveal']",
      { right: "100%" },
      { duration: 0.5, ease: "easeIn" },
    );
    await animate(
      "[data-animation_id='slide']",
      { opacity: 1, left: 0 },
      { duration: 0.5, delay },
    );
  }, [animate, bg]);

  useEffect(() => {
    if (isInView) {
      animationSequence();
    }
  }, [isInView, animationSequence]);

  return (
    <div ref={scope} className="relative w-fit overflow-hidden">
      <div className="relative left-5 opacity-0" data-animation_id="slide">
        {children}
      </div>
      <div
        data-animation_id="reveal"
        aria-hidden="true"
        className={twMerge(
          "absolute inset-x-0 inset-y-1 right-0 bg-main-purple",
          RevealBgVariant[bg],
        )}
      />
    </div>
  );
}
