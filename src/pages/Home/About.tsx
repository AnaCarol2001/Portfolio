import Tag from "@components/ui/Tag";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="relative scroll-m-12 px-4 py-20 text-white before:absolute before:inset-0 before:z-[-1] before:-skew-y-3 before:bg-main-purple md:py-40"
    >
      <div className="mx-auto grid max-w-6xl justify-center gap-8 md:grid-cols-2">
        <div className="max-w-prose space-y-4">
          <h2 className="font-poppins text-5xl font-semibold">About me</h2>
          <p>{t("about.part1")}</p>
          <p>{t("about.part2")}</p>
          <p>{t("about.part3")}</p>
        </div>
        <div className="space-y-4 md:justify-self-center">
          <h3 className="font-poppins text-5xl font-semibold">Techs</h3>
          <ul className="flex flex-wrap gap-4">
            <li>
              <Tag variant="white">HTML</Tag>
            </li>
            <li>
              <Tag variant="white">CSS</Tag>
            </li>
            <li>
              <Tag variant="white">JavaScript</Tag>
            </li>
            <li>
              <Tag variant="white">ReactJs</Tag>
            </li>
            <li>
              <Tag variant="white">Tailwind</Tag>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
