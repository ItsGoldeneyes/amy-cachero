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
                HOME
            </NavLink>
            <NavLink 
                to="/work" 
                className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
            >
                WORK
            </NavLink>
            <NavLink 
                to="/projects" 
                className={({ isActive }) => (isActive ? styles.active_project : styles.inactive)}
            >
                PROJECTS
            </NavLink>
        </div>
        <div className={styles.icons_container}>
            <LinkedInIcon fontSize="large" sx={{color:"#6795d1"}}></LinkedInIcon>
        </div>
    </div>
  );
}