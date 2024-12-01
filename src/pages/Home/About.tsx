import Tag from "./ui/Tag";

export default function About() {
  return (
    <section
      id="about"
      className="relative  px-4 py-20 md:py-40 text-white before:absolute before:inset-0 before:z-[-1] before:bg-main-purple before:-skew-y-3 scroll-m-12"
    >
      <div className="grid gap-8 justify-center md:grid-cols-2 max-w-6xl mx-auto">
        <div className="space-y-4 max-w-prose">
          <h2 className="font-poppins font-semibold text-5xl">About me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit
            illum vero quibusdam doloremque consectetur eveniet, totam expedita
            ut provident! Neque molestiae est nesciunt dignissimos aspernatur
            nisi cumque distinctio aliquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit
            illum vero quibusdam doloremque consectetur eveniet, totam expedita
            ut provident! Neque molestiae est nesciunt dignissimos aspernatur
            nisi cumque distinctio aliquam.
          </p>
        </div>
        <div className="space-y-4 md:justify-self-center">
          <h3 className="font-poppins font-semibold text-5xl">Techs</h3>
          <ul className="flex flex-wrap gap-4">
            <li>
              <Tag bgColor="white" textColor="main-purple">
                HTML
              </Tag>
            </li>
            <li>
              <Tag bgColor="white" textColor="main-purple">
                CSS
              </Tag>
            </li>
            <li>
              <Tag bgColor="white" textColor="main-purple">
                JavaScript
              </Tag>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
