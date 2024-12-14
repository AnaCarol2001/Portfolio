import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TagProps extends ComponentProps<"span"> {
  variant?: "main-purple" | "white";
}

const TagVariants: Record<NonNullable<TagProps["variant"]>, string> = {
  "main-purple": "bg-main-purple text-white ",
  white: "bg-white text-main-purple ",
};

export default function Tag({ variant = "main-purple", ...props }: TagProps) {
  return (
    <span
      className={twMerge(
        "inline-block text-nowrap rounded-lg px-2 py-1 text-sm font-bold",
        TagVariants[variant],
      )}
      {...props}
    />
  );
}
