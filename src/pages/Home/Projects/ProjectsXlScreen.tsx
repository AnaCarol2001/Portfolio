import Card from "@components/ui/Card";
import { useTranslation } from "react-i18next";
import { projects } from "./projects";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ProjectsXlScrenn() {
  const { t } = useTranslation();
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const translateY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const scale2 = useTransform(scrollYProgress, [0.33, 1], [1, 0.9]);

  return (
    <section
      id="projects"
      className="mx-auto mb-14 mt-24 max-w-6xl text-center md:mt-36"
      ref={container}
    >
      <div className="xl:sticky xl:top-20 xl:mb-10">
        <h2 className="mb-5 font-poppins text-5xl font-semibold text-main-purple">
          {t("projects.title")}
        </h2>
        <p className="mb-5 text-lg">{t("projects.desc")}</p>
        <div className="xl:h-screen">
          <motion.div className="origin-top" style={{ scale, translateY }}>
            <Card
              cardData={projects[0]}
              className="bg-gradient-to-br from-slate-900 to-blue-900"
            />
          </motion.div>
        </div>
      </div>
      <div className="xl:sticky xl:top-56 xl:mb-5 xl:h-screen">
        <motion.div
          className="origin-top"
          style={{ scale: scale2, translateY }}
        >
          <Card
            cardData={projects[1]}
            imageOrderDesktop="left"
            className="bg-gradient-to-bl from-green-600 to-blue-800"
          />
        </motion.div>
      </div>
      <div className="xl:op-60 xl:sticky xl:h-screen">
        <motion.div className="origin-top" style={{ translateY }}>
          <Card
            cardData={projects[2]}
            className="bg-gradient-to-br from-slate-900 to-slate-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
