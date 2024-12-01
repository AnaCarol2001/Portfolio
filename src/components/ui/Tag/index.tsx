const bgVariants = {
  "main-purple": "bg-main-purple",
  white: "bg-white",
};

const textVariants = {
  "main-purple": "text-main-purple",
  white: "text-white",
};

type TagProps = {
  children: string;
  bgColor?: keyof typeof bgVariants;
  textColor?: keyof typeof textVariants;
};

export default function Tag({
  bgColor = "main-purple",
  textColor = "white",
  children,
}: TagProps) {
  return (
    <span
      className={`${bgVariants[bgColor]} ${textVariants[textColor]} inline-block px-2 py-1 md:py-2 md:px-4 font-bold rounded-lg text-nowrap`}
    >
      {children}
    </span>
  );
}
