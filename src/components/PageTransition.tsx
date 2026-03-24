import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [phase, setPhase] = useState<"enter" | "exit">("enter");

  useEffect(() => {
    // On route change, trigger exit then swap content
    if (children !== displayChildren) {
      setPhase("exit");
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0 });
        setDisplayChildren(children);
        setPhase("enter");
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [children, displayChildren]);

  useEffect(() => {
    // Initial mount
    setPhase("enter");
  }, []);

  return (
    <div
      className={`transition-all duration-300 ease-out ${
        phase === "enter"
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3"
      }`}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
