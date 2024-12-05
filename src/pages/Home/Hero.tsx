import { Email, GitHub, LinkedIn } from "@assets/icons";

export default function Hero() {
  return (
    <div className="relative grid h-screen content-evenly justify-items-center gap-6 px-6 pb-16 pt-20 md:max-h-[700px] md:grid-cols-2 md:justify-items-end md:gap-14 lg:mx-auto lg:max-w-6xl xl:max-h-none xl:px-0">
      <div className="order-2 grid justify-items-center gap-4 text-center md:order-1 md:content-center md:justify-items-start md:text-left">
        <h1 className="font-poppins text-5xl font-semibold text-black md:text-7xl lg:text-8xl">
          <span className="block font-sofiaSans text-2xl font-semibold text-main-purple md:text-3xl">
            Front-end developer
          </span>{" "}
          Ana Carolina
        </h1>
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, nemo.
        </p>
        <div className="flex items-center gap-4 text-main-purple">
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
      <div className="relative order-1 aspect-square max-w-sm md:mr-10">
        <img
          className="rounded-2xl"
          src="https://avatars.githubusercontent.com/u/62663206?v=4"
          alt="Profile picture of Ana Carolina"
        />
        <div
          aria-hidden="true"
          className="border-sm absolute left-4 top-4 z-[-1] h-full w-full rounded-2xl border-2 border-solid border-main-purple"
        ></div>
        <div
          aria-hidden="true"
          className="border-sm absolute bottom-4 right-4 z-[-2] h-full w-full rounded-2xl border-2 border-solid border-main-purple lg:bottom-0 lg:left-8 lg:right-0 lg:top-8"
        ></div>
      </div>
      {/* <div
        aria-hidden="true"
        className="-z-50 absolute w-[53rem] h-44 bottom-[-25%] right-0 left-0 mx-auto rounded-full backdrop-filter blur-[250px]  bg-main-purple"
      ></div> */}
    </div>
  );
}
