import { useState } from "react";
import {
  HiMicrophone,
  HiOutlineEmojiHappy,
  HiOutlinePaperClip,
} from "react-icons/hi";
import { IoSend } from "react-icons/io5";
import styles from "./MessageForm.module.css";

function MessageForm() {
  const [input, setInput] = useState("");

  return (
    <form className={styles.messageForm}>
      <div className={styles.messageInput}>
        <button>
          <HiOutlineEmojiHappy />
        </button>
        <input
          type="text"
          placeholder="Message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>
          <HiOutlinePaperClip />
        </button>
      </div>
      <button className={styles.messageButton}>
        {input === "" ? <HiMicrophone /> : <IoSend />}
      </button>
    </form>
  );
}

export default MessageForm;
