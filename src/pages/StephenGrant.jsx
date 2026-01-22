

import { useNavigate } from "react-router-dom";
import styles_global from "../styles/App.module.css";
import styles from "../styles/Projects.module.css";

import stephenSc from "../assets/Projects/stephen-website-screenshot.png";

import {motion as m } from "framer-motion";
import { useEffect } from "react";

export default function StephenGrant() {

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
          {
            /*
            <a href="https://theoheras.com/" target="_blank" rel="noreferrer" className={styles.view_project}>
            VIEW WEBSITE
          </a>
            */
          }
          
          <div>
            <div className={styles.project_titles}>
              Project details
            </div>
            <div className={styles.project_content}>
              <div>
                The goal was to have a website through which Stephen could easily share and view his poetry.
              </div>
            </div>
          </div>
          <div>
            <div className={styles.project_titles}>
              The Process
            </div>
            <div className={styles.project_content}>
              <div>
                The design and styling of the website was provided by both the old unfinished website and 
                the wordpress theme chosen (twentyfifteen). I also added some custom CSS to certain elements. 
              </div>
              <div>
                The poems posted on the website are in a simple database schema that categorizes published and 
                unpublished works. 
              </div>
              <div>
                The WordPress site is running as a container on a ProxMox server.
              </div>
              <div>
                There was a slight learning curve for me as I familiarized myself with Wordpress. It is a 
                high level application, but I am used to having full control of a repository, and having 
                the ability to change details easily through code. 
              </div>
            </div>
          </div>
          <div>
            <div className={styles.project_titles}>
              Tech stack
            </div>
            <div className={styles.project_content}>
              WordPress CSS
            </div>
          </div>
          <div className={styles.role_and_status}>
            <div>
              Role: Developer
            </div>
            <div>
              Status: In progress, aiming to ship January 2026
            </div>
          </div>
        </div>
        <div className={styles.project_screenshot_column}>
          <img className={styles.project_screenshot} src={stephenSc}></img>
        </div>
      </div>
      
    </m.div>
  );
}