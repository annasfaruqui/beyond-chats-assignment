import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";
import MessageForm from "../MessageForm/MessageForm";
import styles from "./Main.module.css";

import { useMessages } from "../../hooks/useMessages";
import { format } from "date-fns";
import ChatHeader from "../ChatHeader/ChatHeader";

function Main() {
  const { messages, isLoading, error } = useMessages(3448);

  return (
    <main className={styles.main}>
      <ChatHeader />
      <div className={styles.section}>
        {isLoading && <Loader />}
        {error && <Error errMessage={error} />}
        {messages
          .map((message, idx, arr) => (
            <div key={message.id} className={styles.messages}>
              {format(new Date(arr.at(idx).created_at), "dd MMM") !==
                format(
                  new Date(
                    (arr.at(idx - 1) === undefined
                      ? arr.at(0)
                      : arr.at(idx - 1)
                    ).created_at
                  ),
                  "dd MMM"
                ) && (
                <div className={styles.messagesDate}>
                  {format(new Date(message.created_at), "dd MMM")}
                </div>
              )}
              <Message Message={message} />
            </div>
          ))
          .reverse()}
        <MessageForm />
      </div>
    </main>
  );
}

export default Main;
