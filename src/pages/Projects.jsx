
import ProjectBox from "../components/ProjectBox";

import styles_global from "../styles/App.module.css";
import styles from "../styles/Projects.module.css";

import stephenSC from "../assets/Projects/stephen-website-screenshot.png";
import theoSC from "../assets/Projects/theo-website-screenshot.png";

import {motion as m } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function Projects() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <m.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className={styles_global.page_container}
    >
      <div className={styles.projects_background}>
        <div className={styles.projects_blurb}>
          Click on a project to see more details
        </div>
        <div className={styles.projects_grid}>
          <div onClick={() => navigate('stephen-website')}>
            <ProjectBox projectName={"Website for Stephen Grant"} projectDate={"January 2026"} projectImage={stephenSC} techStack={"Wordpress, CSS"}/>
          </div>
          <div onClick={() => navigate('theo-website')}>
            <ProjectBox projectName={"Website for Theo Heras"} projectDate={"October 2023"} projectImage={theoSC} techStack={"React, HTML, CSS, JavaScript"}/>  
          </div>
        </div>
      </div>
    </m.div>
  );
}