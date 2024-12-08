import Card from "@components/ui/Card";
import { useTranslation } from "react-i18next";
import { projects } from "./projects";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section
      id="projects"
      className="mx-auto mb-14 max-w-6xl pt-24 text-center md:pt-36"
    >
      <div className="mb-14 px-4 lg:sticky lg:top-24">
        <h2 className="mb-5 font-poppins text-5xl font-semibold text-main-purple">
          {t("projects.title")}
        </h2>
        <p className="text-lg">{t("projects.desc")}</p>
      </div>
      <div className="grid gap-10 lg:gap-20">
        <Card
          cardData={projects[0]}
          className="bg-gradient-to-br from-slate-900 to-blue-900 lg:sticky lg:top-40"
        />
        <Card
          cardData={projects[1]}
          imageOrderDesktop="left"
          className="bg-gradient-to-bl from-green-600 to-blue-800 lg:sticky lg:top-44"
        />
        <Card
          cardData={projects[2]}
          className="bg-gradient-to-br from-slate-900 to-slate-500 lg:sticky lg:top-48"
        />
      </div>
    </section>
  );
}
