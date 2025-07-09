import styles_global from "../styles/App.module.css";
import styles from "../styles/Projects.module.css";

import {motion as m } from "framer-motion";
import { useEffect } from "react";

export default function Projects() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <m.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className={styles_global.page_container}
    >
      <div className={styles.projects_background}>
        <div className={styles.coming_soon}>
          More coming soon!
        </div>
      </div>
    </m.div>
  );
}