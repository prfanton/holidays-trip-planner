import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import styles from "./PageTransition.module.css";

export default function PageTransition({ children }) {
  const location = useLocation();
  const [stage, setStage] = useState("enter");
  const [displayChildren, setDisplayChildren] = useState(children);
  const prevKey = useRef(location.key);

  useEffect(() => {
    if (location.key !== prevKey.current) {
      setStage("exit");
    }
  }, [location]);

  const handleAnimationEnd = () => {
    if (stage === "exit") {
      prevKey.current = location.key;
      setDisplayChildren(children);
      setStage("enter");
    }
  };

  return (
    <div
      className={`${styles.wrapper} ${styles[stage]}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {displayChildren}
    </div>
  );
}
