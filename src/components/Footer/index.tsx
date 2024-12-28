import { useTranslation } from "react-i18next";
import FlipWord from "@components/ui/AnimatedComponents/FlipWord";

export default function Footer() {
  const { t } = useTranslation();
  const footerTextArr = t("footer").split(" ");

  return (
    <footer className="glass">
      <div className="mx-auto grid min-h-[60vh] max-w-7xl content-between gap-10 px-4 pb-4 pt-10 font-poppins text-xl font-semibold md:pt-16 md:text-2xl lg:px-16">
        <div className="items-start space-y-4 md:flex md:justify-between md:space-y-0">
          <nav className="md:order-2">
            <ul className="space-y-4 capitalize">
              <li>
                <a
                  href="#about"
                  className="transition-colors hover:text-main-purple focus-visible:text-main-purple"
                >
                  {" "}
                  {t("links.about")}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="transition-colors hover:text-main-purple focus-visible:text-main-purple"
                >
                  {t("links.projects")}
                </a>
              </li>
            </ul>
          </nav>
          <ul className="space-y-4 md:order-1">
            <li>
              <a
                href="https://github.com/AnaCarol2001"
                target="_blank"
                className="flex items-center transition-colors hover:text-main-purple focus-visible:text-main-purple"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ana-carolina-d-sanches"
                target="_blank"
                className="flex items-center transition-colors hover:text-main-purple focus-visible:text-main-purple"
              >
                LinkedIn
              </a>
            </li>

            <li className="">
              <a
                href="mailto:anacarolina2001.trabalho@gmail.com"
                target="_blank"
                className="flex items-center transition-colors hover:text-main-purple focus-visible:text-main-purple"
              >
                Email
              </a>
            </li>
          </ul>
        </div>

        <p className="text-5xl font-extrabold uppercase sm:text-6xl lg:text-[5rem]">
          <span className="sr-only">{t("footer")}</span>
          <span
            aria-hidden="true"
            className="flex flex-wrap items-center gap-4"
            style={{ lineHeight: 0.8 }}
          >
            <span>{footerTextArr.slice(0, -1).join(" ")}</span>
            <FlipWord text={footerTextArr[footerTextArr.length - 1]} />
          </span>
        </p>
      </div>
    </footer>
  );
}
