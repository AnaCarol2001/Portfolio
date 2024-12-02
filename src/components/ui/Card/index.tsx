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
    <div className="mx-4 grid items-center gap-8 overflow-hidden rounded-2xl bg-blue-950 pt-12 text-white md:h-[70vh] md:grid-cols-2 md:pr-0 md:pt-12 lg:sticky lg:top-40 lg:gap-0 lg:rounded-b-none lg:rounded-t-3xl lg:pt-16">
      <div
        className={`${order[deskVariant].content} max-w-md space-y-4 justify-self-center px-8 text-left md:pb-12`}
      >
        <h3 className="font-poppins text-3xl font-light">{cardData.title}</h3>
        <p>{cardData.description}</p>

        <ul className="flex flex-wrap gap-2">
          {cardData.tags?.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <a href={cardData.liveSite} className="flex items-center gap-2 p-2">
            <ArrowUp /> Website
          </a>
          <a href={cardData.repo} className="flex items-center gap-2 p-2">
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
