import { HiOutlineMenu, HiOutlineSearch } from "react-icons/hi";
import styles from "./SidebarHeader.module.css";

function SidebarHeader() {
  return (
    <div className={styles.sidebarHeader}>
      <button className={styles.button}>
        <HiOutlineMenu />
      </button>
      <form className={styles.search}>
        <button className={styles.searchIcon}>
          <HiOutlineSearch />
        </button>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search"
        />
      </form>
    </div>
  );
}

export default SidebarHeader;
