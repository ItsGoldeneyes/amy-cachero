

import styles_global from "../styles/App.module.css";
import styles from "../styles/Projects.module.css";

import theoSC from "../assets/Projects/theo-website-screenshot.png";

import {motion as m } from "framer-motion";
import { useEffect } from "react";

export default function TheoHeras() {

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
      <div>
        <div>
          <div>
            Project details
          </div>
          <div>
            <div>
              Children’s author Theo Heras had a website that was out of date and no longer functional. With an art showcase for her needlepoint collection coming up, she wanted something new and improved. 
            </div>
          </div>
        </div>
        <div>
          <div>
            The Process
          </div>
          <div>
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
          <div>
            Tech stack
          </div>
          <div>
            React, HTML, CSS, JavaScript
          </div>
        </div>
        <div>
          <div>
            Role: Designer and developer
          </div>
          <div>
            Status: Officially shopped October 9, 2023
          </div>
        </div>
      </div>
    </m.div>
  );
}