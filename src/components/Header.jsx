import { NavLink } from 'react-router-dom';
import "../styles/App.css";
import styles from "../styles/Header.module.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Header() {
    return (
    <div className={styles.header_container}>
        <div className={styles.nav_container}>
            <NavLink 
                to="/" 
                className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
            >
                Home
            </NavLink>
            <NavLink 
                to="/work" 
                className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
            >
                Work
            </NavLink>
            <NavLink 
                to="/projects" 
                className={({ isActive }) => (isActive ? styles.active_project : styles.inactive)}
            >
                Projects
            </NavLink>
        </div>
        <a className={styles.icons_container} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/amy-cachero/">
            <LinkedInIcon fontSize="large" sx={{color:"#6795d1"}}></LinkedInIcon>
        </a>
    </div>
  );
}