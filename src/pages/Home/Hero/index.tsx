import { Email, GitHub, LinkedIn } from "@assets/icons";
import Reveal from "@components/ui/AnimatedComponents/Reveal";
import HeroImg3d from "./HeroImg3d";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative grid h-screen content-evenly justify-items-center gap-6 px-6 pb-16 pt-20 md:max-h-[700px] md:grid-cols-2 md:justify-items-end md:gap-14 lg:mx-auto lg:max-w-6xl xl:max-h-none xl:px-0">
      <div className="order-2 grid justify-items-start gap-4 md:order-1 md:content-center md:justify-items-start md:text-left">
        <h1
          style={{ lineHeight: 0.9 }}
          className="font-poppins text-6xl font-semibold text-black md:text-7xl lg:text-8xl"
        >
          <Reveal>
            <span className="block font-sofiaSans text-xl font-semibold text-main-purple md:mb-3 md:text-2xl">
              {t("dev")}
            </span>
          </Reveal>
          <Reveal>
            <span>Ana Carolina</span>
          </Reveal>
        </h1>
        <Reveal>
          <p className="text-base">{t("hero")}</p>
        </Reveal>
        <Reveal>
          <div className="flex items-center gap-2 text-main-purple *:m-1">
            <a
              className="transition-colors duration-500 hover:text-black focus-visible:text-black"
              aria-label="GitHub"
              target="_blank"
              href="https://github.com/AnaCarol2001"
            >
              <GitHub />
            </a>
            <a
              className="transition-colors duration-500 hover:text-black focus-visible:text-black"
              aria-label="LinkedIn"
              target="_blank"
              href="https://www.linkedin.com/in/ana-carolina-d-sanches"
            >
              <LinkedIn />
            </a>
            <a
              className="transition-colors duration-500 hover:text-black focus-visible:text-black"
              href="mailto:anacarolina2001.trabalho@gmail.com"
            >
              <Email />
            </a>
          </div>
        </Reveal>
      </div>
      <HeroImg3d />
    </div>
  );
}
