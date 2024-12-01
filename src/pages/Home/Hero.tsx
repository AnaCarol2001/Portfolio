import { Email, GitHub, LinkedIn } from "../assets/icons";

export default function Hero() {
  return (
    <div className="relative h-screen md:max-h-[700px] pt-20 pb-16 px-6 grid content-evenly justify-items-center gap-6 md:gap-14 md:grid-cols-2 md:justify-items-end  xl:max-h-none lg:max-w-6xl lg:mx-auto xl:px-0">
      <div className="order-2 md:order-1 text-center grid gap-4 justify-items-center md:text-left md:justify-items-start md:content-center">
        <h1 className="font-poppins font-semibold text-black text-5xl md:text-7xl lg:text-8xl ">
          <span className="block font-sofiaSans font-semibold text-main-purple text-2xl md:text-3xl ">
            Front-end developer
          </span>{" "}
          Ana Carolina
        </h1>
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, nemo.
        </p>
        <div className="flex gap-4 items-center text-main-purple">
          <a aria-label="GitHub" href="http://">
            <GitHub />
          </a>
          <a aria-label="LinkedIn" href="http://">
            <LinkedIn />
          </a>
          <a href="mailto:">
            <Email />
          </a>
        </div>
      </div>
      <div className="relative order-1 max-w-sm aspect-square md:mr-10">
        <img
          className="rounded-2xl"
          src="https://avatars.githubusercontent.com/u/62663206?v=4"
          alt="Profile picture of Ana Carolina"
        />
        <div
          aria-hidden="true"
          className="z-[-1] absolute w-full h-full left-4 top-4 border-2 border-main-purple border-solid border-sm rounded-2xl"
        ></div>
        <div
          aria-hidden="true"
          className="z-[-2] absolute w-full h-full right-4 bottom-4 lg:right-0 lg:bottom-0 lg:left-8 lg:top-8 border-2 border-main-purple border-solid border-sm rounded-2xl"
        ></div>
      </div>
      {/* <div
        aria-hidden="true"
        className="-z-50 absolute w-[53rem] h-44 bottom-[-25%] right-0 left-0 mx-auto rounded-full backdrop-filter blur-[250px]  bg-main-purple"
      ></div> */}
    </div>
  );
}
