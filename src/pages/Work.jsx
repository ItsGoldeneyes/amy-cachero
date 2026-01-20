import styles_global from "../styles/App.module.css";
import styles from "../styles/Work.module.css";

import wave from "../assets/wave.png";
import resume from "../assets/Amy_Cachero_Resume.pdf";

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
      <div className={styles.work_blurb}>
        Below are descriptions of all of my work experiences, in order of most to least recent. <br></br><br></br>Click <span><a href={resume} target="_blank" rel="noreferrer" className={styles.work_blurb_link}>here</a></span> to see my resume. 
      </div>
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
                During my time at ISED, I learned how to use a variety of high-level Microsoft tools and apps including 
                Microsoft Powerapps, Power Automate, Excel, Azure, and Sharepoint. 
              </div>
            </div>
          </div>
          <div>
            <div className={styles.work_subtitle}>
              What I accomplished...
            </div>
            <div className={styles.work_lists}>
              <div>
                Collaborated with a small team to develop a Shoutouts app called Bravo. The app was meant to be a virtual alternnative to 
                the in-person shoutout wall at the office. I used a Microsoft Power Apps template, PowerAutomate, and Sharepoint to complete 
                the jira tickets that were assigned to me.
              </div>
              <div>
                I also helped to lead bi-weekly Tech Talk meetings and discussed the team's current projects, blockers, and future tasks. 
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
                While I had learned the basics of the React framework in web development courses, Aisha Living is where 
                I gained practical experience and became familiar with React. 
              </div>
              <div>
                I used the React MUI library throughout to implement navigation, typography, and icons into the UI of 
                the Aisha Living website. 
              </div>
              <div>
                I learned how to use the React Redux library to create functions that created, modified, and removed 
                entries in the company database. 
              </div>
              <div>
                We used a Django framework for the backend of the application. 
              </div>
            </div>
          </div>
          <div>
            <div className={styles.work_subtitle}>
              What I accomplished...
            </div>
            <div className={styles.work_lists}>
              <div>
                I developed and deployed many iterations of the Aisha Living website, along with other websites related to 
                other projects within the company. I regularly recieved design updates through figma and through one on one calls 
                with my supervisor. 
              </div>
              <div>
                Along with my responsibilities as a developer, I vetted Co-op applications for the company, narrowing them down for the interview process. 
                I also conducted the interviews virtually and discussed potential candidates with my Supervisor. 
                Before my final Co-Op term with Aisha Living, I onboarded the new hires on the development team, using 
                documentation I had written throughout my time there. 
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
                I learned to navigate the expansive test repository for Solace's software products. The repository was written in TCL. 
                This is also the first time I used SVN as opposed to Git for source control, which included learning new commands and a new interface. 
              </div>
              <div>
                During my second term at Solace, I pivoted to working on quality assurance for the web-user interface. This process 
                involved testing UI. I learned how to navigate and edit the test repository, which was written with Typescript 
                and a Playwright framework. I learned about checking accessibility for those who are visually impaired, and how it 
                can be implemented into the color scheme and style of a user interface. 
              </div>
            </div>
          </div>
          <div>
            <div className={styles.work_subtitle}>
              What I accomplished...
            </div>
            <div className={styles.work_lists}>
              <div>
                I analyzed test failures and created new scripts in Solace’s automated test repository. 
                I also added some logging functionality to the repository. 
              </div>
              <div>
                I created and debugged automated tests for the web user interface of Solace products using a
                Playwright framework, TypeScript, and Git. 
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
                My time at Ruckify came with a lot of firsts, as it was my first time in a professional computer 
                science environment. I learned how to create automated tests using Cypress. 
              </div>
              <div>
                I experienced the software development lifecycle in a scrum environment, which included code reviews 
                and daily team standup meetings. 
              </div>
              <div>
                I learned how to use Jira for task management and Git for source control.
              </div>
            </div>
          </div>
          <div>
            <div className={styles.work_subtitle}>
              What I accomplished...
            </div>
            <div className={styles.work_lists}>
              <div>
                I created, updated and executed automated test cases using JavaScript and a Cypress framework. 
                I used an extension that recorded me as I interacted with the Ruckify website and generated the 
                required JavaScript code to validate the user expeirence. 
              </div>
              <div>
                I manually went through the Ruckify website and updated its development code, correcting capitalization and spelling errors. 
              </div>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}