import { HiOutlineDotsVertical, HiOutlinePhone, HiOutlineSearch } from "react-icons/hi";
import defaultImg from "../../images/default.jpg";
import styles from "./ChatHeader.module.css";
import Error from "../Error/Error";

function ChatHeader({ name, image, error, isLoading }) {
  return (
    <header className={styles.chatHeader}>
      {error && <Error />}
      <img
        src={image || defaultImg}
        alt={`${name ? name : "Default user"}`}
        className={styles.chatImg}
      />
      <div className={styles.chatIdentity}>
        {isLoading ? (
          <p className={styles.loading}>Loading......</p>
        ) : (
          <>
            <p className={styles.chatName}>
              <strong>{name ? name : "User"}</strong>
            </p>
            <p className={styles.lastSeen}>last seen recently</p>
          </>
        )}
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
