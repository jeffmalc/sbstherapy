import { ReactNode, useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

const PageTransition = ({ children, className = "" }: PageTransitionProps) => {
  const location = useLocation();
  const [phase, setPhase] = useState<"enter" | "exit">("enter");
  const prevKey = useRef(location.key);

  useEffect(() => {
    if (location.key !== prevKey.current) {
      setPhase("exit");
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0 });
        prevKey.current = location.key;
        setPhase("enter");
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [location.key]);

  return (
    <div
      className={`transition-all duration-300 ease-out ${
        phase === "enter"
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
