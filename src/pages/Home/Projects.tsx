import spaceImg from "../assets/spaceTourism.png";
import easyBank from "../assets/Group 4.png";
import countries from "../assets/Group 5.png";
import Card from "../../components/ui/Card";

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
      className="text-center max-w-6xl mx-auto mb-14 pt-24 md:pt-36"
    >
      <div className="px-4 mb-14 lg:sticky lg:top-24">
        <h2 className="font-poppins font-semibold text-main-purple text-5xl mb-5 ">
          Projects
        </h2>
        <p className="text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
          quisquam?
        </p>
      </div>
      <div className="grid gap-10 lg:gap-20">
        <Card cardData={projects[0]} />
        <Card cardData={projects[1]} deskVariant={2} />
        <Card cardData={projects[2]} />
      </div>
    </section>
  );
}
