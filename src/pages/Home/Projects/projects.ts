import spaceImg from "@assets/spaceTourismProject_lg.png";
import easyBank from "@assets/easyBankProject_lg.png";
import countries from "@assets/countriesProject_lg.png";
import spaceImgSm from "@assets/spaceTourismProject_sm.png";
import easyBankSm from "@assets/easyBankProject_sm.png";
import countriesSm from "@assets/countriesProject_sm.png";

export const projects = [
  {
    translationKeys: {
      title: "projects.project1.title",
      desc: "projects.project1.desc",
    },
    img: { lg: spaceImg, sm: spaceImgSm },
    tags: ["HTML", "CSS", "JavaScript"],
    liveSite: "https://anacarol2001.github.io/SpaceTourismWebsite/",
    repo: "https://github.com/AnaCarol2001/SpaceTourismWebsite",
  },
  {
    translationKeys: {
      title: "projects.project2.title",
      desc: "projects.project2.desc",
    },
    img: { lg: easyBank, sm: easyBankSm },
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
    img: { lg: countries, sm: countriesSm },
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
