import { lazy, Suspense } from "react";
import useMediaQuery from "@hooks/useMediaQuery";

const DeskNav = lazy(() => import("./DeskNav"));
const MobileNav = lazy(() => import("./MobileNav"));

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return (
      <Suspense>
        <MobileNav />
      </Suspense>
    );
  }

  return (
    <Suspense>
      <DeskNav />
    </Suspense>
  );
}
