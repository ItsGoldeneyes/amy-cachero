


import { useNavigate } from "react-router-dom";
import styles_global from "../styles/App.module.css";
import styles from "../styles/Projects.module.css";

import theoSC from "../assets/Projects/theo-website-screenshot.png";
import theoNeedlepointSC from "../assets/Projects/theo-needlepoint-sc.png"

import {motion as m } from "framer-motion";
import { useEffect } from "react";

export default function TheoHeras() {

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
      <div onClick={() => navigate('/projects')} className={styles.return_to_projects}>
        Back to projects
      </div>
      <div className={styles.project_container}>
        <div className={styles.project_text}>
          <a href="https://theoheras.com/" target="_blank" rel="noreferrer" className={styles.view_project}>
            VIEW WEBSITE
          </a>
          <div>
            <div className={styles.project_titles}>
              Project details
            </div>
            <div className={styles.project_content}>
              <div>
                Children's author Theo Heras requested a new and improved website that could be launched 
                in time for an upcoming art showcase. Her previous website was out of date and no longer functional. 
              </div>
            </div>
          </div>
          <div>
            <div className={styles.project_titles}>
              The Process
            </div>
            <div className={styles.project_content}>
              <div>
                I had many meetings with Theo to discuss what she was looking for. She showed me websites belonging to other children’s authors that I could pull inspiration from in terms of styling. 
              </div>
              <div>
                For the most part, I was given lots of creative freedom with the design for this website. I went for a light and playful design. 
              </div>
              <div>
                I used media queries to make the website responsive on different screen sizes. 
              </div>
            </div>
          </div>
          <div>
            <div className={styles.project_titles}>
              Tech stack
            </div>
            <div className={styles.project_content}>
              React, HTML, CSS, JavaScript
            </div>
          </div>
          <div className={styles.role_and_status}>
            <div>
              Role: Designer and developer
            </div>
            <div>
              Status: Officially shipped October 9, 2023
            </div>
          </div>
        </div>
        <div className={styles.project_screenshot_column}>
          <img className={styles.project_screenshot} src={theoSC}></img>
          <img className={styles.project_screenshot} src={theoNeedlepointSC}></img>
        </div>
      </div>
      
    </m.div>
  );
}