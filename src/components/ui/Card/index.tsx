import { ArrowUp, Code } from "@assets/icons";
import Tag from "@components/ui/Tag";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { motion, useScroll, useTransform } from "framer-motion";
import { ComponentProps, useRef } from "react";
import Reveal from "@components/ui/AnimatedComponents/Reveal";

type CardData = {
  translationKeys: {
    title: string;
    desc: string;
  };
  img: { sm: string; lg: string };
  tags: string[];
  liveSite: string;
  repo: string;
};

const ImageOrderDesktop: Record<
  NonNullable<CardProps["imageOrderDesktop"]>,
  { content: string; img: string }
> = {
  left: { content: "sm:order-2", img: "sm:order-1" },
  right: { content: "sm:order-1", img: "sm:order-2" },
};

interface CardProps extends ComponentProps<"div"> {
  cardData: CardData;
  imageOrderDesktop?: "left" | "right";
  className?: string;
}

export default function Card({
  cardData,
  imageOrderDesktop = "right",
  className,
  ...props
}: CardProps) {
  const { t } = useTranslation();
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start center"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  return (
    <div
      ref={container}
      className={twMerge(
        "relative mx-4 grid max-w-md items-center gap-8 overflow-hidden rounded-2xl bg-blue-950 pt-12 text-white shadow-md sm:max-w-full sm:grid-cols-2 sm:pt-0 md:gap-2 md:pr-0 lg:rounded-xl xl:h-[525px]",
        className,
      )}
      {...props}
    >
      <div
        className={twMerge(
          "max-w-md space-y-4 justify-self-center px-8 text-left sm:px-4 sm:py-8",
          ImageOrderDesktop[imageOrderDesktop].content,
        )}
      >
        <Reveal bg="none">
          <h3 className="font-poppins text-2xl font-medium lg:text-3xl">
            {t(cardData.translationKeys.title)}
          </h3>
        </Reveal>
        <Reveal bg="none">
          <p className="text-sm lg:text-base">
            {t(cardData.translationKeys.desc)}
          </p>
        </Reveal>

        <Reveal bg="none">
          <ul className="flex flex-wrap gap-2">
            {cardData.tags?.map((tag) => (
              <li key={tag}>
                <Tag variant="white">{tag}</Tag>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal bg="none">
          <div className="flex gap-4">
            <a
              href={cardData.liveSite}
              target="_blank"
              className="flex items-center gap-2 p-2"
            >
              <ArrowUp /> Website
            </a>
            <a
              href={cardData.repo}
              target="_blank"
              className="flex items-center gap-2 p-2"
            >
              <Code /> Repository
            </a>
          </div>
        </Reveal>
      </div>
      <picture
        className={twMerge(
          "relative h-full overflow-hidden",
          ImageOrderDesktop[imageOrderDesktop].img,
        )}
      >
        <source srcSet={cardData.img.sm} media="(max-width: 640px)" />
        <source srcSet={cardData.img.lg} media="(min-width: 641px)" />
        <motion.img
          src={cardData.img.lg}
          alt=""
          style={{ scale: imgScale }}
          className="h-full w-full object-cover object-center"
        />
      </picture>
    </div>
  );
}
