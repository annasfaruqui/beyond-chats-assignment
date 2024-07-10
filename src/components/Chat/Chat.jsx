import { useNavigate } from "react-router-dom";
import defaultImg from "../../images/default.jpg";
import styles from "./Chat.module.css";
import { useMessages } from "../../hooks/useMessages";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const chatt = {
  id: 3888,
  lead_score: 0,
  msg_count: 3,
  org_id: 10,
  status: "ongoing",
  created_at: "2024-07-04T09:41:23.000000Z",
  created_by: 3828,
  updated_at: "2024-07-04T09:41:51.000000Z",
  creator: {
    browser: "Chrome",
    city: "Delhi",
    country: {
      code: "IN",
      id: 103,
      name: "India",
      phone_code: "91",
    },
    id: 3828,
    name: "Shone Jogi",
    phone: "9130907456",
    email: "asdfaefsdfgqwaeg@beyondexams.orgfasd",
    email_verified_at: null,
    device: "desktop",
    os: "Mac",
    password_updated: 0,
    created_at: "2024-07-04T09:41:23.000000Z",
    updated_at: "2024-07-04T09:41:23.000000Z",
  },
};

function Chat({ chat, current, curActive, onActive }) {
  const navigate = useNavigate();
  const { creator, id, status } = chat;
  const { name } = creator;
  const { messages, isLoading, error } = useMessages(id);
  const isOpen = current === curActive;

  function handleClick() {
    onActive(isOpen ? null : current);
    navigate(`/chats/${id}`);
  }

  return (
    <>
      {isLoading && <Loader />}
      {error && <Error errMessage={error} />}
      <div onClick={handleClick} className={`${styles.chat} ${isOpen ? styles.active : ""}`}>
        <img
          src={creator.image || defaultImg}
          alt={`${name ? name : "Default user"}`}
          className={styles.chatImg}
        />
        <div className={styles.chatDetails}>
          <p className={styles.user}>{name ? name : "User"}</p>
          <p className={`${styles.message} ${isOpen ? styles.activeMessage : ""}`}>
            {messages.length > 0 &&
              `${messages.at(-1).message.split(" ").slice(0, 4).join(" ")}....`}
          </p>
        </div>
        <div className={styles.chatStatus}>
          <p className={`${styles.time} ${isOpen ? styles.activeTime : ""}`}>12:00</p>
          {status === "new" && (
            <p className={`${styles.unread} ${isOpen ? styles.activeUnread : ""}`}>
              <strong>2</strong>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Chat;
