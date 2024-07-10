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

  return (
    <section className={styles.section}>
      {isLoading && <Loader />}
      {error && <Error errMessage={error} />}
      {messages
        .map((message, idx, arr) => {
          // console.log(message);
          // console.log(
          //   format(new Date(arr.at(idx).created_at), "dd MMM") !==
          //     format(
          //       new Date(
          //         (arr.at(idx - 1) === undefined ? arr.at(0) : arr.at(idx - 1)).created_at
          //       ),
          //       "dd MMM"
          //     )
          // );

          return (
            <div key={message.id} className={styles.messages}>
              {format(new Date(arr.at(idx).created_at), "dd MMM") !==
                format(
                  new Date(
                    (arr.at(idx - 1) === undefined ? arr.at(0) : arr.at(idx - 1)).created_at
                  ),
                  "dd MMM"
                ) && (
                <div className={styles.messagesDate}>
                  {isToday(new Date(message.created_at))
                    ? "Today"
                    : format(new Date(message.created_at), "dd MMM")}
                </div>
              )}
              <Message msg={message} isLoading={isLoading} />
            </div>
          );
        })
        .reverse()}
      <MessageForm />
    </section>
  );
}

export default Messages;
