import styles_global from "../styles/App.module.css";
import styles from "../styles/Work.module.css";

import wave from "../assets/wave.png";

export default function Work() {
  return (
    <div className={styles_global.page_container}>
      <div className={styles.work_container}>
        <div className={styles.title_container}>
          <div className={styles.work_title}>
            Innovation, Science and Economic Development Canada
          </div>
          <div className={styles.dates}>
            May-August 2024
          </div>
        </div>
        <div>
          <div>
            <div>
              What I learned
            </div>
            <div>
              Powerapps 
              Shit about AI???
            </div>
          </div>
          <div>
            <div>
              What I accomplished
            </div>
            <div>
              Went thru process of making app 
              
            </div>
          </div>
          
          • Collaborated with a small team to develop a shoutouts app for the department. Worked with Microsoft
          Power Apps and Power Automate for development and Jira for task management.
          • Led bi-weekly Tech Talk meetings when supervisors were unavailable. Discussed current progress,
          blockers, and future tasks.

        </div>
        <div className={styles.link_container}>
          <a target="_blank" rel="noreferrer" href="https://ised-isde.canada.ca/site/ised/en">
            ISED Website link
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
        <div>
          Aisha Comfortable Coliving is a digital platform that strives to build an inclusive community.
          • Consulted Figma designs to add and edit frontend styling and functionality to company website using
          React, JavaScript, and MUI: https://www.comfortablecoliving.ca/
          • Implemented backend functionality using React Redux and a Django framework

        </div>
        <div className={styles.link_container}>
          <a target="_blank" rel="noreferrer" href="https://www.aishaliving.ca/">
            Aisha Living Website link
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
        <div>
        Solace is the leading innovator in event-driven architecture.
        • Analyzed test failures and created new scripts in Solace’s automated test repository using Tcl. Source
        control managed through SVN.
        • Created and debugged automated tests for the web user interface of Solace products using a
        Playwright framework and TypeScript. Source control managed through Git.
        • Maintained and augmented tests with new product features or updates.
        </div>
        <div className={styles.link_container}>
          <a target="_blank" rel="noreferrer" href="https://solace.com/">
            Solace Website link
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
        <div>
        Ruckify was a peer-to-peer online rental marketplace
        • Created, updated and executed automated test cases using JavaScript and Cypress framework
        • Participated in code reviews and daily team standups
        • Modified and updated development code, correcting capitalization and spelling errors on the Ruckify
        website
        </div>
      </div>
    </div>
  );
}