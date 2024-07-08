import { useEffect, useState } from "react";

export function useMessages(id) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function getMessages() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${id}`
          );
          if (!res.ok)
            throw new Error("There was an error loading the messages");

          const data = await res.json();
          if (data.status === "success") setMessages(data.data);
        } catch (err) {
          console.log(err);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      getMessages();
    },
    [id]
  );

  return { messages, isLoading, error };
}
