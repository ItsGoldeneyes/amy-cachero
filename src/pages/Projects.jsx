import styles_global from "../styles/App.module.css";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <div className={styles_global.page_container}>
      <div className={styles.projects_background}>
        <div className={styles.coming_soon}>
          More coming soon!
        </div>
      </div>
    </div>
  );
}