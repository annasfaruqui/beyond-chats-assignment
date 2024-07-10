import Chat from "../Chat/Chat";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import styles from "./Chats.module.css";
import { useChats } from "../../hooks/useChats";
import { useState } from "react";

function Chats() {
  const { chats, isLoading, error } = useChats(1);
  const [curActive, setCurActive] = useState(null);

  return (
    <div className={styles.chatsList}>
      {isLoading && <Loader />}
      {error && <Error errMessage={error} />}
      <ul>
        {chats.map((chat) => (
          <Chat
            chat={chat}
            key={chat.id}
            current={chat.id}
            curActive={curActive}
            onActive={setCurActive}
          />
        ))}
      </ul>
    </div>
  );
}

export default Chats;
