import { ComponentProps, createElement } from "react";

interface BtnProps extends ComponentProps<"button"> {
  as: "button";
}

interface AnchorProps extends ComponentProps<"a"> {
  as: "a";
}

type ActionProps = BtnProps | AnchorProps;

export default function Action({ as = "button", ...props }: ActionProps) {
  const className =
    "relative isolate overflow-hidden rounded-lg border bg-main-purple px-4 py-2 font-semibold text-white before:absolute before:inset-x-0 before:bottom-0 before:-z-10 before:mx-auto before:aspect-square before:w-1/12 before:rounded-full before:bg-black before:opacity-0 before:transition-all before:duration-500 hover:before:scale-[15] hover:before:opacity-100 focus-visible:before:scale-[15] focus-visible:before:opacity-100";

  return createElement(as, { className, ...props });
}
