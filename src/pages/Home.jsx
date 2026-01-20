import styles_global from "../styles/App.module.css";
import styles from "../styles/Home.module.css";

import shell from "../assets/shell.png";

import me_outside from "../assets/me_outside.jpeg";
import me_very_outside from "../assets/me_very_outside.jpeg";
import me_mirror from "../assets/me_mirror.jpeg";

import {motion as m } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles_global.page_container}>
      <m.div
        className={styles.home_margin_left}
        initial={{ x: "-100% "}}
        animate={{ x: "0%" }}
        transition={{ duration: 0.5 }}
        exit={{ x: "-100%" }}
      >
      </m.div>
      <m.div
        className={styles.home_margin_right}
        initial={{ x: "100% "}}
        animate={{ x: "0%" }}
        transition={{ duration: 0.5 }}
        exit={{ x: "100%" }}
      ></m.div>
      <m.div 
        className={styles.home_container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.home_title_section_mobile}>
          <div className={styles.home_title_section}>
            <div className={styles.home_title}>
              Amy Cachero
            </div>
            <div className={styles.home_welcome_section}>
              <div className={styles.home_welcome}>
                Welcome to my portfolio!
              </div>
              <div className={styles.home_description}>
                I am a programmer with experience in web development and quality assurance. <br></br>
                I am passionate about the intersection between logic and creativity.
              </div>
            </div>
          </div>
        </div>
        

        <div className={styles.home_icon_container}>
          <img className={styles.home_icon} src={shell} alt="----------"></img>
        </div>

        <div className={styles.home_about_me}>
          <div className={styles.home_subtitle}>
            More about me
          </div>
          <div className={styles.home_description}>
            I am a recent graduate of the Computer Science Co-op program at Toronto Metropolitan University. 
            The Co-op program allowed me to contribute to a variety of companies and work in both the private 
            and public sector. A more in-depth look at my work experiences can be seen on <span><NavLink to="/work" className={styles.home_links}>this page</NavLink></span>.
          </div>

          <div className={styles.home_description}>
            My interests within the field of computer science range from databases to websites to video games. 
            I enjoy seeing the results of my creations visually, which is why I was initially drawn 
            to web development and ui/ux development. Details are important to me, and I have a deep 
            respect for every step of the software development lifecycle. 
          </div>

          <div className={styles.home_description}>
            Some of my projects outside of programming include art and video editing. Take a look at my
            projects in more detail <span><NavLink to="/projects" className={styles.home_links}>here</NavLink></span>. 
          </div>
        </div>

        <div className={styles.home_pictures_container}>
          <img className={styles.img0} src={me_outside} alt="me outside"></img>
          <img className={styles.img1} src={me_very_outside} alt="me very outside"></img>
          <img className={styles.img2} src={me_mirror} alt="me in a mirror"></img>
        </div>
      </m.div>
    </div>
  );
}