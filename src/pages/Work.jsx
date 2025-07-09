import styles_global from "../styles/App.module.css";
import styles from "../styles/Work.module.css";

import wave from "../assets/wave.png";

import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import {motion as m } from "framer-motion";
import { useEffect } from "react";

export default function Work() {

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
      <div className={styles.work_container}>
        <div className={styles.title_container}>
          <div className={styles.work_title}>
            Innovation, Science and Economic Development Canada
          </div>
          <div className={styles.dates}>
            May-August 2024
          </div>
        </div>
        <div className={styles.work_info}>
          <div>
            <div className={styles.work_subtitle}>
              What I learned...
            </div>
            <div className={styles.work_lists}>
              <div>
                Powerapps
              </div>
              <div>
                PowerAutomate
              </div>
            </div>
          </div>
          <div>
            <div className={styles.work_subtitle}>
              What I accomplished...
            </div>
            <div className={styles.work_lists}>
              <div>
                Collaborated with a small team to create a shoutouts app called Bravo. For department to use instead of wall. 
                Worked with Microsoft Power Apps and Power Automate for development and Jira for task management.
              </div>
              <div>
                Led bi-weekly Tech Talk meetings when supervisors were unavailable. Discussed current progress, blockers, and future tasks.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.link_container}>
          <a target="_blank" rel="noreferrer" href="https://ised-isde.canada.ca/site/ised/en">
            More about ISED 
            <OpenInNewIcon fontSize="1rem"></OpenInNewIcon>
          </a>
        </div>
      </div>

      <div className={styles.wave_container}>
        <img className={styles.wave} src={wave} alt="----------"></img>
      </div>

      <div className={styles.work_container}>
        <div className={styles.title_container}>
          <div className={styles.work_title}>
            Aisha Living
          </div>
          <div className={styles.dates}>
            September 2023 - April 2024
          </div>
        </div>
        <div className={styles.work_info}>
          <div>
            <div className={styles.work_subtitle}>
              What I learned...
            </div>
            <div className={styles.work_lists}>
              <div>
                Gained more experience with react
              </div>
              <div>
                MUI materials. Icons, nav stuff, typography
              </div>
              <div>
                Figma
              </div>
              <div>
                React redux
              </div>
              <div>
                Django
              </div>
            </div>
          </div>
          <div>
            <div className={styles.work_subtitle}>
              What I accomplished...
            </div>
            <div className={styles.work_lists}>
              <div>
                Revamped many websites. Used marketing team's figma designs, 
              </div>
              <div>
                Conducted interviews and trained new hires
              </div>
            </div>
          </div>
        </div>
        <div className={styles.link_container}>
          <a target="_blank" rel="noreferrer" href="https://www.aishaliving.ca/">
            More about Aisha Living
            <OpenInNewIcon fontSize="1rem"></OpenInNewIcon>
          </a>
        </div>
      </div>

      <div className={styles.wave_container}>
        <img className={styles.wave} src={wave} alt="----------"></img>
      </div>

      <div className={styles.work_container}>
        <div className={styles.title_container}>
          <div className={styles.work_title}>
            Solace
          </div>
          <div className={styles.dates}>
            May-August 2022, May-August 2023
          </div>
        </div>
        <div className={styles.work_info}>
          <div>
            <div className={styles.work_subtitle}>
              What I learned...
            </div>
            <div className={styles.work_lists}>
              <div>
                Tcl, svn
              </div>
              <div>
                Playwright, Typescript
              </div>
            </div>
          </div>
          <div>
            <div className={styles.work_subtitle}>
              What I accomplished...
            </div>
            <div className={styles.work_lists}>
              <div>
                Analyzed test failures and created new scripts in Solace’s automated test repository using Tcl. Source
                control managed through SVN.
              </div>
              <div>
                Created and debugged automated tests for the web user interface of Solace products using a
                Playwright framework and TypeScript. Source control managed through Git.
              </div>
              <div>
                Maintained and augmented tests with new product features or updates.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.link_container}>
          <a target="_blank" rel="noreferrer" href="https://solace.com/">
            More about Solace
            <OpenInNewIcon fontSize="1rem"></OpenInNewIcon>
          </a>
        </div>
      </div>

      <div className={styles.wave_container}>
        <img className={styles.wave} src={wave} alt="----------"></img>
      </div>
      
      <div className={styles.work_container}>
        <div className={styles.title_container}>
          <div className={styles.work_title}>
            Ruckify
          </div>
          <div className={styles.dates}>
            May-August 2020, May-August 2021
          </div>
        </div>
        <div className={styles.work_info}>
          <div>
            <div className={styles.work_subtitle}>
              What I learned...
            </div>
            <div className={styles.work_lists}>
              <div>
                First experience with quality assurance, learned how to automat test w cypress
              </div>
              <div>
                First experience with git, jira, all that shit
              </div>
            </div>
          </div>
          <div>
            <div className={styles.work_subtitle}>
              What I accomplished...
            </div>
            <div className={styles.work_lists}>
              <div>
                Created, updated and executed automated test cases using JavaScript and Cypress framework
              </div>
              <div>
                Participated in code reviews and daily team standups
              </div>
              <div>
                Modified and updated development code, correcting capitalization and spelling errors on the Ruckify
                website
              </div>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}