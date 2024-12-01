import { ArrowUp, Code } from "../../../assets/icons";
import Tag from "../Tag";

type CardData = {
  title: string;
  description: string;
  img: string;
  tags: string[];
  liveSite: string;
  repo: string;
};

type Card = {
  cardData: CardData;
  deskVariant?: 1 | 2;
  stickyTop?: number;
};

export default function Card({ cardData, deskVariant = 1 }: Card) {
  const order = {
    1: { content: "lg:order-1", img: "lg:order-2" },
    2: { content: "lg:order-2", img: "lg:order-1" },
  };
  return (
    <div className="lg:sticky lg:top-40  grid items-center gap-8 bg-blue-950 mx-4 rounded-2xl pt-12 overflow-hidden  text-white md:grid-cols-2 md:pt-12 md:pr-0 lg:gap-0 lg:rounded-b-none lg:rounded-t-3xl lg:pt-16 md:h-[70vh]">
      <div
        className={`${order[deskVariant].content} max-w-md px-8 justify-self-center text-left space-y-4 md:pb-12`}
      >
        <h3 className="font-poppins font-light text-3xl">{cardData.title}</h3>
        <p>{cardData.description}</p>

        <ul className="flex gap-2 flex-wrap">
          {cardData.tags?.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <a href={cardData.liveSite} className="flex gap-2 items-center p-2">
            <ArrowUp /> Website
          </a>
          <a href={cardData.repo} className="flex gap-2 items-center  p-2">
            <Code /> Repository
          </a>
        </div>
      </div>
      <img
        src={cardData.img}
        alt=""
        className={`object-cover object-left ${order[deskVariant].img}`}
      />
    </div>
  );
}
