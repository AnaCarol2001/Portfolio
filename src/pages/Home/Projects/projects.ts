import spaceImg from "@assets/spaceTourism.png";
import easyBank from "@assets/easyBankProject.png";
import countries from "@assets/countriesProject.png";

export const projects = [
  {
    translationKeys: {
      title: "projects.project1.title",
      desc: "projects.project1.desc",
    },
    img: spaceImg,
    tags: ["HTML", "CSS", "JavaScript"],
    liveSite: "https://anacarol2001.github.io/SpaceTourismWebsite/",
    repo: "https://github.com/AnaCarol2001/SpaceTourismWebsite",
  },
  {
    translationKeys: {
      title: "projects.project2.title",
      desc: "projects.project2.desc",
    },
    img: easyBank,
    tags: [
      "React",
      "Framer-motion",
      "Styled-components",
      "Vite",
      "Composition pattern",
    ],
    liveSite: "https://anacarol2001.github.io/EasyBankLandingPage/",
    repo: "https://github.com/AnaCarol2001/EasyBankLandingPage",
  },
  {
    translationKeys: {
      title: "projects.project3.title",
      desc: "projects.project3.desc",
    },
    img: countries,
    tags: [
      "React",
      "React-router",
      "React-query",
      "Tailwind",
      "Vite",
      "REST Countries API",
    ],
    liveSite: "https://countries-website-pi.vercel.app/",
    repo: "https://github.com/AnaCarol2001/CountriesWebsite",
  },
];
