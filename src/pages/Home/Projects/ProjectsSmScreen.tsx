import Card from "@components/ui/Card";
import { useTranslation } from "react-i18next";
import { projects } from "./projects";
import { motion } from "framer-motion";

const animationVariant = {
  initial: {
    translateY: 30,
    opacity: 0,
  },
  inView: {
    translateY: 0,
    opacity: 1,
    transition: {
      ease: "linear",
    },
  },
};

export default function ProjectsSmScreen() {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="mx-auto mb-14 mt-24 max-w-6xl text-center md:mb-28 md:mt-36"
    >
      <div className="mb-14 px-4 lg:px-0">
        <h2 className="mb-5 font-poppins text-5xl font-semibold text-main-purple">
          {t("projects.title")}
        </h2>
        <p className="mb-5 text-lg">{t("projects.desc")}</p>
      </div>
      <div className="grid justify-center space-y-14">
        <motion.div
          initial="initial"
          whileInView="inView"
          viewport={{ amount: 0.2, once: true }}
          variants={animationVariant}
        >
          <Card
            cardData={projects[0]}
            className="bg-gradient-to-br from-slate-900 to-blue-900"
          />
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="inView"
          viewport={{ amount: 0.2, once: true }}
          variants={animationVariant}
        >
          <Card
            cardData={projects[1]}
            imageOrderDesktop="left"
            className="bg-gradient-to-bl from-green-600 to-blue-800"
          />
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="inView"
          viewport={{ amount: 0.2, once: true }}
          variants={animationVariant}
        >
          <Card
            cardData={projects[2]}
            className="bg-gradient-to-br from-slate-900 to-slate-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
