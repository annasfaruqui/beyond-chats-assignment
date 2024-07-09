import {
  HiOutlineDotsVertical,
  HiOutlinePhone,
  HiOutlineSearch,
} from "react-icons/hi";
import defaultImg from "../../images/default.jpg";
import styles from "./ChatHeader.module.css";

function ChatHeader() {
  return (
    <header className={styles.chatHeader}>
      <img src={defaultImg} alt="default user" className={styles.chatImg} />
      <div className={styles.chatIdentity}>
        <p className={styles.chatName}>
          <strong>Chat</strong>
        </p>
        <p className={styles.lastSeen}>last seen recently</p>
      </div>

      <div className={styles.actionButtons}>
        <button>
          <HiOutlinePhone />
        </button>
        <button>
          <HiOutlineSearch />
        </button>
        <button>
          <HiOutlineDotsVertical />
        </button>
      </div>
    </header>
  );
}

export default ChatHeader;
