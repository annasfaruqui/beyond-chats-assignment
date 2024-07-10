import { Outlet, useParams } from "react-router";

import styles from "./Main.module.css";
import ChatHeader from "../ChatHeader/ChatHeader";
import { useChats } from "../../hooks/useChats";

function Main() {
  const { chatId } = useParams();
  const { chats, isLoading, error } = useChats(1);

  const [chat] = chats.filter((chat) => Number(chat.id) === Number(chatId));

  let senderName;
  let senderImage;

  if (chat !== undefined) {
    senderName = chat.creator.name;
    senderImage = chat.creator.image;
  }

  return (
    <main className={styles.main}>
      <ChatHeader name={senderName} image={senderImage} error={error} isLoading={isLoading} />
      <Outlet />
    </main>
  );
}

export default Main;
