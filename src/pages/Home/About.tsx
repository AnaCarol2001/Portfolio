import Tag from "@components/ui/Tag";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const tags = [
  "HTML",
  "CSS",
  "JavaScript",
  "Typescript",
  "ReactJs",
  "Tailwind",
  "Responsive",
  "Accessibility",
  "HTML",
  "CSS",
  "JavaScript",
  "Typescript",
  "ReactJs",
  "Tailwind",
  "Responsive",
  "Accessibility",
];

export default function About() {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="relative scroll-m-12 py-20 text-white before:absolute before:inset-0 before:z-[-1] before:-skew-y-3 before:bg-main-purple md:py-20"
    >
      <div className="mx-auto mb-10 max-w-3xl px-4">
        <div className="space-y-4">
          <h2 className="font-poppins text-5xl font-semibold">
            {t("about.title")}
          </h2>
          <p>{t("about.part1")}</p>
          <p>{t("about.part2")}</p>
          <p>{t("about.part3")}</p>
        </div>
      </div>
      <div className="fadeOutMask-horizontal overflow-clip md:-skew-y-2 md:[--mask-size:5rem]">
        <motion.ul
          className="flex w-max gap-4 pl-4 [--translateX:-50%] md:gap-10 md:pl-10"
          animate={{ translateX: "var(--translateX, 0)" }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {tags.map((tag, i) => {
            const isAriaHidden = i > (tags.length - 1) / 2;
            return (
              <li key={tag + i}>
                <Tag
                  variant="white-outline"
                  size="lg"
                  aria-hidden={isAriaHidden}
                >
                  {tag}
                </Tag>
              </li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
