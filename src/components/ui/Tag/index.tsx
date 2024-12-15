import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TagProps extends ComponentProps<"span"> {
  variant?: "main-purple" | "white" | "white-outline";
  size?: "sm" | "lg";
}

const TagVariants: Record<NonNullable<TagProps["variant"]>, string> = {
  "main-purple": "bg-main-purple text-white ",
  white: "bg-white text-main-purple ",
  "white-outline": "bg-transparent border border-2 border-white",
};

const TagSize: Record<NonNullable<TagProps["size"]>, string> = {
  sm: "rounded-lg px-2 py-1 text-sm font-bold",
  lg: "text-lg py-1 px-4 md:px-8 rounded-full",
};

export default function Tag({
  variant = "main-purple",
  size = "sm",
  ...props
}: TagProps) {
  return (
    <span
      className={twMerge(
        "text- inline-block text-nowrap",
        TagVariants[variant],
        TagSize[size],
      )}
      {...props}
    />
  );
}
