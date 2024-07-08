import { Outlet } from "react-router";
import styles from "./Sidebar.module.css";

import Nav from "../Nav/Nav";
import SidebarHeader from "../SidebarHeader/SidebarHeader";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <SidebarHeader />
      <Nav />
      <Outlet />
    </aside>
  );
}

export default Sidebar;
