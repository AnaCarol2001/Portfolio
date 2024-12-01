import Navbar from "../../components/Navbar";
import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";

export default function Home() {
  return (
    <div className="relative overflow-clip">
      <div aria-hidden="true" className="-z-50 overflow-hidden">
        <div className="absolute w-[28rem] h-64 top-[-3rem] left-[-13rem] rounded-full backdrop-filter blur-[250px] bg-main-purple"></div>
        <div className="absolute w-[28rem] h-64 top-[3.5rem] right-[-7rem] rounded-full backdrop-filter blur-[250px]  bg-main-purple"></div>
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <div aria-hidden="true" className="-z-50 overflow-hidden">
        <div className="absolute w-[28rem] h-64 bottom-[15rem] left-[-13rem] rounded-full backdrop-filter blur-[250px] bg-main-purple"></div>
        <div className="absolute w-[28rem] h-64 bottom-[3.5rem] right-[-15rem] rounded-full backdrop-filter blur-[250px]  bg-main-purple"></div>
      </div>
      <footer className="max-w-6xl mx-auto grid content-between min-h-[70vh] glass rounded-t-2xl font-poppins font-semibold text-xl md:text-2xl px-4 pt-16 pb-4 lg:px-16">
        <div className="space-y-4 md:flex md:justify-between">
          <nav>
            <ul className="space-y-4">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
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
        <a className="text-main-purple text-2xl md:text-4xl" href="mailto:">
          anacaarolina@mail.com
        </a>
        <p className="text-6xl md:text-9xl">Let's talk!</p>
      </footer>
    </div>
  );
}
