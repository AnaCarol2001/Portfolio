import spaceImg from "@assets/spaceTourism.png";
import easyBank from "@assets/easyBankProject.png";
import countries from "@assets/countriesProject.png";
import Card from "@components/ui/Card";

const projects = [
  {
    title: "Space Tourism - SPA",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestiae optio saepe ipsum et aliquam, sit impedit, recusandae accusamus sunt, exercitationem nostrum delectus? Corporis maxime accusantium dicta doloribus voluptates sint.",
    img: spaceImg,
    tags: ["HTML", "CSS", "JavaScript"],
    liveSite: "",
    repo: "",
  },
  {
    title: "EasyBank Landing Page",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestiae optio saepe ipsum et aliquam, sit impedit, recusandae accusamus sunt, exercitationem nostrum delectus? Corporis maxime accusantium dicta doloribus voluptates sint.",
    img: easyBank,
    tags: ["React", "Framer-motion", "Styled-components"],
    liveSite: "",
    repo: "",
  },
  {
    title: "Where in the World? - SPA",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestiae optio saepe ipsum et aliquam, sit impedit, recusandae accusamus sunt, exercitationem nostrum delectus? Corporis maxime accusantium dicta doloribus voluptates sint.",
    img: countries,
    tags: ["React", "React-router", "react-query", "tailwind", "vite"],
    liveSite: "",
    repo: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto mb-14 max-w-6xl pt-24 text-center md:pt-36"
    >
      <div className="mb-14 px-4 lg:sticky lg:top-24">
        <h2 className="mb-5 font-poppins text-5xl font-semibold text-main-purple">
          Projects
        </h2>
        <p className="text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
          quisquam?
        </p>
      </div>
      <div className="grid gap-10 lg:gap-20">
        <Card
          cardData={projects[0]}
          className="bg-gradient-to-br from-slate-900 to-blue-900 lg:sticky lg:top-40"
        />
        <Card
          cardData={projects[1]}
          imageOrderDesktop="left"
          className="bg-gradient-to-bl from-green-600 to-blue-800 lg:sticky lg:top-44"
        />
        <Card
          cardData={projects[2]}
          className="bg-gradient-to-br from-slate-900 to-slate-500 lg:sticky lg:top-48"
        />
      </div>
    </section>
  );
}
