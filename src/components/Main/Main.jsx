import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";
import MessageForm from "../MessageForm/MessageForm";
import styles from "./Main.module.css";

import { useMessages } from "../../hooks/useMessages";

function Main() {
  const { messages, isLoading, error } = useMessages(3888);

  console.log(
    "Messages are: ",
    messages.map((message) => message)
  );

  return (
    <main className={styles.main}>
      <div className={styles.section}>
        {isLoading && <Loader />}
        {error && <Error errMessage={error} />}
        {messages.map((message) => (
          <Message key={message.id} Message={message} />
        ))}
        <MessageForm />
      </div>
    </main>
  );
}

export default Main;
