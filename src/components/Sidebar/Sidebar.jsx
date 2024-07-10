import styles from "./Sidebar.module.css";

import Nav from "../Nav/Nav";
import SidebarHeader from "../SidebarHeader/SidebarHeader";
import Chats from "../Chats/Chats";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <SidebarHeader />
      <Nav />
      <Chats />
    </aside>
  );
}

export default Sidebar;
