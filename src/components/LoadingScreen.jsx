import { useEffect, useState } from "react";
import logoImg from "../assets/logo.png";
import styles from "./LoadingScreen.module.css";

export default function LoadingScreen() {
  const [hiding, setHiding] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true), 600);
    const t2 = setTimeout(() => setGone(true), 1000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (gone) return null;

  return (
    <div className={`${styles.overlay} ${hiding ? styles.hiding : ""}`}>
      <div className={styles.content}>
        <img src={logoImg} alt="Buser" className={styles.logo} />
        <div className={styles.spinner} />
      </div>
    </div>
  );
}
