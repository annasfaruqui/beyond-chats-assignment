import { useState } from "react";
import styles from "./Nav.module.css";

const navLinks = [
  {
    id: 1,
    name: "All Chats",
  },
  {
    id: 2,
    name: "Regulars",
  },
  {
    id: 3,
    name: "Unread",
  },
  {
    id: 4,
    name: "Personal",
  },
];

function Nav() {
  const [curActive, setCurActive] = useState(1);

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navLinks.map((link) => (
          <Link
            key={link.id}
            link={link}
            curActive={curActive}
            onActive={setCurActive}
            num={link.id}
          />
        ))}
      </ul>
    </nav>
  );
}

function Link({ link, curActive, onActive, num }) {
  const isOpen = num === curActive;

  function handleToggle() {
    onActive(isOpen ? null : num);
  }

  return (
    <li onClick={handleToggle}>
      <p className={`${styles.link} ${isOpen ? styles.active : ""}`}>
        {link.name}
        <span className={styles.unread}>28</span>
      </p>
    </li>
  );
}

export default Nav;
