import useMediaQuery from "@hooks/useMediaQuery";
import { lazy, Suspense } from "react";

const ProjectsXlScreen = lazy(() => import("./ProjectsXlScreen"));
const ProjectsSmScreen = lazy(() => import("./ProjectsSmScreen"));

export default function Projects() {
  const isXlScreen = useMediaQuery("(min-width: 1280px)");

  if (isXlScreen)
    return (
      <Suspense>
        <ProjectsXlScreen />
      </Suspense>
    );

  return (
    <Suspense>
      <ProjectsSmScreen />
    </Suspense>
  );
}
