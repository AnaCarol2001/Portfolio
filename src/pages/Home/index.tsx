import Navbar from "@components/Navbar";
import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-clip">
      <div aria-hidden="true" className="-z-50 overflow-hidden">
        <div className="absolute left-[-13rem] top-[-3rem] h-64 w-[28rem] rounded-full bg-main-purple blur-[250px] backdrop-filter"></div>
        {/* <div className="absolute right-[-7rem] top-[3.5rem] h-64 w-[28rem] rounded-full bg-main-purple blur-[250px] backdrop-filter"></div> */}
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
      <Footer />
    </div>
  );
}
