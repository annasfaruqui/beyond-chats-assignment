import styles from "./Chat.module.css";
import defaultImg from "../../images/default.jpg";

const user = {
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

function Chat({ chat }) {
  const { creator } = chat;
  const { name, email, phone } = creator;

  return (
    <form className={styles.chat}>
      <img src={defaultImg} alt="Default user" className={styles.chatImg} />
      <div className={styles.chatDetails}>
        <p className={styles.user}>{name ? name : email}</p>
        <h4>{phone}</h4>
      </div>
    </form>
  );
}

export default Chat;
