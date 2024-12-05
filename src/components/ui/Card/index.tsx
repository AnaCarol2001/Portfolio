import { ArrowUp, Code } from "@assets/icons";
import Tag from "@components/ui/Tag";
import { twMerge } from "tailwind-merge";

type CardData = {
  title: string;
  description: string;
  img: string;
  tags: string[];
  liveSite: string;
  repo: string;
};

const ImageOrderDesktop: Record<
  NonNullable<CardProps["imageOrderDesktop"]>,
  { content: string; img: string }
> = {
  left: { content: "lg:order-2", img: "lg:order-1" },
  right: { content: "lg:order-1", img: "lg:order-2" },
};

interface CardProps {
  cardData: CardData;
  imageOrderDesktop?: "left" | "right";
  className?: string;
}

export default function Card({
  cardData,
  imageOrderDesktop = "right",
  className,
}: CardProps) {
  return (
    <div
      className={twMerge(
        "mx-4 grid items-center gap-8 overflow-hidden rounded-2xl bg-blue-950 pt-12 text-white shadow-md md:h-[70vh] md:grid-cols-2 md:pr-0 md:pt-12 lg:gap-0 lg:rounded-b-none lg:rounded-t-3xl lg:pt-16",
        className,
      )}
    >
      <div
        className={twMerge(
          "max-w-md space-y-4 justify-self-center px-8 text-left md:pb-12",
          ImageOrderDesktop[imageOrderDesktop].content,
        )}
      >
        <h3 className="font-poppins text-3xl font-light">{cardData.title}</h3>
        <p>{cardData.description}</p>

        <ul className="flex flex-wrap gap-2">
          {cardData.tags?.map((tag) => (
            <li key={tag}>
              <Tag variant="white">{tag}</Tag>
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
        className={twMerge(
          "object-cover object-left",
          ImageOrderDesktop[imageOrderDesktop].img,
        )}
      />
    </div>
  );
}
