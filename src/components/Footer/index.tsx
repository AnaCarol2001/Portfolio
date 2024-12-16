import { useTranslation } from "react-i18next";
import useMediaQuery from "@hooks/useMediaQuery";
import FlipWord from "@components/ui/AnimatedComponents/FlipWord";

export default function Footer() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 640px)");
  const footerTextArr = t("footer").split(" ");

  return (
    <footer className="glass mx-auto grid min-h-[70vh] max-w-6xl content-between rounded-t-2xl px-4 pb-4 pt-16 font-poppins text-xl font-semibold md:text-2xl lg:px-16">
      <div className="items-center space-y-4 md:flex md:justify-between md:space-y-0">
        <nav>
          <ul className="space-y-4 capitalize">
            <li>
              <a href="#about"> {t("links.about")}</a>
            </li>
            <li>
              <a href="#projects">{t("links.projects")}</a>
            </li>
          </ul>
        </nav>
        <ul className="space-y-4">
          <li>
            <a
              href="https://github.com/AnaCarol2001"
              target="_blank"
              className="flex items-center gap-2"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ana-carolina-d-sanches"
              target="_blank"
              className="flex items-center gap-2"
            >
              LinkedIn
            </a>
          </li>
          {isMobile && (
            <li>
              <a
                href="mailto:anacarolina2001.trabalho@gmail.com"
                target="_blank"
                className="flex items-center gap-2"
              >
                Email
              </a>
            </li>
          )}
        </ul>
      </div>
      {!isMobile && (
        <a
          className="text-3xl text-main-purple md:text-4xl"
          href="mailto:anacarolina2001.trabalho@gmail.com"
        >
          anacarolina2001.trabalho@gmail.com
        </a>
      )}
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
    </footer>
  );
}
