import Navbar from "@components/Navbar";
import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="relative overflow-clip">
      <div aria-hidden="true" className="-z-50 overflow-hidden">
        <div className="absolute left-[-13rem] top-[-3rem] h-64 w-[28rem] rounded-full bg-main-purple blur-[250px] backdrop-filter"></div>
        <div className="absolute right-[-7rem] top-[3.5rem] h-64 w-[28rem] rounded-full bg-main-purple blur-[250px] backdrop-filter"></div>
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <div aria-hidden="true" className="-z-50 overflow-hidden">
        <div className="absolute bottom-[15rem] left-[-13rem] h-64 w-[28rem] rounded-full bg-main-purple blur-[250px] backdrop-filter"></div>
        <div className="absolute bottom-[3.5rem] right-[-15rem] h-64 w-[28rem] rounded-full bg-main-purple blur-[250px] backdrop-filter"></div>
      </div>
      <footer className="glass mx-auto grid min-h-[70vh] max-w-6xl content-between rounded-t-2xl px-4 pb-4 pt-16 font-poppins text-xl font-semibold md:text-2xl lg:px-16">
        <div className="space-y-4 md:flex md:justify-between">
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
              <a href="" className="flex items-center gap-2">
                GitHub
              </a>
            </li>
            <li>
              <a href="" className="flex items-center gap-2">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <a className="text-2xl text-main-purple md:text-4xl" href="mailto:">
          anacaarolina@mail.com
        </a>
        <p className="text-6xl md:text-9xl">Let's talk!</p>
      </footer>
    </div>
  );
}
