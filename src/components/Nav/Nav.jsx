import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/all-chats">
            All Chats
            <span className={styles.unread}>28</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/regulars">
            Regulars
            <span className={styles.unread}>28</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/unread">
            Unread
            <span className={styles.unread}>28</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/personal">
            Personal
            <span className={styles.unread}>28</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
