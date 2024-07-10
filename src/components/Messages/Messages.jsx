import { format, isToday } from "date-fns";
import styles from "./Messages.module.css";

import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";
import MessageForm from "../MessageForm/MessageForm";
import { useMessages } from "../../hooks/useMessages";
import { useParams } from "react-router";

function Messages() {
  const { chatId } = useParams();
  const { messages, isLoading, error } = useMessages(chatId);

  let a;
  if (messages.length > 0)
    a = messages.map((el, idx, arr) => {
      const b = arr.map(
        (el, idx, arr2) =>
          format(new Date(el.created_at), "dd MMM") ===
          format(
            new Date((arr2.at(idx - 1) === undefined ? arr2.at(0) : arr2.at(idx - 1)).created_at),
            "dd MMM"
          )
      );
      const c = b.filter((el) => el === true).length === b.length;
      return c;
    });

  let datestamp;
  const msgsWithDatestamp = messages
    .map((message, idx, arr) => {
      const timestamp1 = format(new Date(arr.at(idx).created_at), "dd MMM");
      const timestamp2 = format(
        new Date((arr.at(idx - 1) === undefined ? arr.at(0) : arr.at(idx - 1)).created_at),
        "dd MMM"
      );

      const datestamp = timestamp1 !== timestamp2 && (
        <div className={styles.messagesDate}>
          {isToday(new Date(message.created_at))
            ? "Today"
            : format(new Date(message.created_at), "dd MMM")}
        </div>
      );

      return (
        <div key={message.id} className={styles.messages}>
          {datestamp}
          <Message msg={message} isLoading={isLoading} />
        </div>
      );
    })
    .reverse();

  return (
    <section className={styles.section}>
      {isLoading && <Loader />}
      {error && <Error errMessage={error} />}
      {msgsWithDatestamp}
      {datestamp !== null && a && (
        <div className={styles.messagesDate}>
          {isToday(new Date(messages.at(0).created_at))
            ? "Today"
            : format(new Date(messages.at(0).created_at), "dd MMM")}
        </div>
      )}
      <MessageForm />
    </section>
  );
}

export default Messages;
