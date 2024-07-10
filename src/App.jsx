import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./components/AppLayout/AppLayout";
import Messages from "./components/Messages/Messages";
import Empty from "./components/Empty/Empty";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/chats" />} />
          <Route path="/chats" element={<Empty />} />
          <Route path="/chats/:chatId" element={<Messages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
