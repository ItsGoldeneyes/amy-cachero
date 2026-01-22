import "../styles/App.css";
import styles from "../styles/ProjectBox.module.css";

export default function ProjectBox(props) {
    var {projectName, projectDate, projectImage, techStack} = props
    return (
    <div className={styles.project_grid_element}>
      <div className={styles.project_name}>
        {projectName}
      </div>
      {projectImage && (
        <img className={styles.project_image} src={projectImage}></img>
      )}
      <div className={styles.project_date}>
        {projectDate}
      </div>
      <div className={styles.project_tech_stack_container}>
        <div className={styles.project_tech_stack}>
          {techStack}
        </div>
      </div>
    </div>
  );
}