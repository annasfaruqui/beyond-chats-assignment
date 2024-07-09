import Chat from "../Chat/Chat";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import styles from "./Chats.module.css";
import { useChats } from "../../hooks/useChats";

function Chats() {
  const { chats, isLoading, error } = useChats(1);

  // console.log(
  //   "Chats are: ",
  //   chats.map((chat) => chat)
  // );

  return (
    <div className={styles.chatsList}>
      {isLoading && <Loader />}
      {error && <Error errMessage={error} />}
      {chats.map((chat) => (
        <Chat chat={chat} key={chat.id} />
      ))}
    </div>
  );
}

export default Chats;
