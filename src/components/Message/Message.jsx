import { IoCheckmarkDoneOutline, IoCheckmarkOutline } from "react-icons/io5";
import { format } from "date-fns/format";
import styles from "./Message.module.css";
import Empty from "../Empty/Empty";

const messageTemplate = {
  action_id: null,
  chat_id: 3888,
  created_at: "2024-07-04T09:41:48.000000Z",
  id: 14022,
  is_corrected: 0,
  messagee:
    "Hi there! Welcome to BeyondChats\nWhat brings you here today?\nAsk me anything about BeyondChats",
  role_id: 9,
  sender: {
    browser: null,
    city: null,
    country: null,
    created_at: null,
    device: null,
    email: "contact@beyondchat.com",
    email_verified_at: null,
    id: 1,
    name: "BeyondChat",
    os: null,
    password_updated: 0,
    phone: null,
    updated_at: "2023-04-26T12:43:24.000000Z",
  },
  sender_id: 1,
  unanswered: 0,
  updated_at: "2024-07-04T09:41:48.000000Z",
  vote: null,
};

function Message({ msg, isLoading }) {
  const { sender_id, message, created_at, unanswered } = msg;

  const formattedTime = format(new Date(created_at), "hh:mm");

  return (
    <>
      {isLoading ? (
        <Empty />
      ) : (
        <div
          className={`${styles.messageContainer} ${
            sender_id === 1 ? styles.messageSender : styles.messageReceiver
          }`}
        >
          <p className={styles.message}>
            {message.split("\n").map((el, idx) => (
              <span key={idx}>
                {el} <br />
              </span>
            ))}
            <span className={styles.messageStatus}>
              <span>{formattedTime}</span>
              {sender_id !== 1 && (
                <span className={styles.read}>
                  {unanswered === 0 ? <IoCheckmarkDoneOutline /> : <IoCheckmarkOutline />}
                </span>
              )}
            </span>
          </p>
        </div>
      )}
    </>
  );
}

export default Message;
