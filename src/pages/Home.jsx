import styles_global from "../styles/App.module.css";
import styles from "../styles/Home.module.css";

import shell from "../assets/shell.png";

export default function Home() {
  return (
    <div className={styles_global.page_container}>
      <div className={styles.home_margin_left}></div>
      <div className={styles.home_margin_right}></div>
      <div className={styles.home_container}>
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
            and public sector. A more in-depth look at my work experiences can be seen on <span><a className={styles.home_links} href="/work">this page</a></span> 
          </div>

          <div className={styles.home_description}>
            My interests within the field of computer science range from databases to websites to video games. 
            I enjoy seeing the results of my creations visually, which is why I was initially drawn 
            to web development and ui/ux development. Details are important to me, and I have a deep 
            respect for every step of the software development lifecycle. 
          </div>

          <div className={styles.home_description}>
            I love learning new skills and hobbies- I'm always excited to expand my repetoire. 
            Fun fact: I learned how to use Procreate in order to draw the images seen throughout this website. 
            After a weekend borrowing a friend's iPad, I achieved the personal flare I was looking for!
          </div>

          <div className={styles.home_description}>
            Some of my projects outside of programming include art and video editing. Take a look at my
            projects in more detail <span><a className={styles.home_links} href="/projects">here</a></span>. 
          </div>
        </div>
      </div>
    </div>
  );
}