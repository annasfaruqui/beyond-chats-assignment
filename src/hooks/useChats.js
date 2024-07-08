import { useEffect, useState } from "react";

export function useChats(page) {
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function getData() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://devapi.beyondchats.com/api/get_all_chats?page=${page}`
          );
          if (!res.ok) throw new Error("There was an error fetching the chats");

          const data = await res.json();
          if (data.status === "success") setChats(data.data.data);

          // console.log("From hook(data): ", data.data.data);
        } catch (err) {
          console.log(err);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      getData();
    },
    [page]
  );

  return { chats, isLoading, error };
}
