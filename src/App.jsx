import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import Chats from "./components/Chats/Chats";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/all-chats" />} />
          <Route path="/all-chats" element={<Chats />} />
          <Route path="/personal" element={<Chats />} />
          <Route path="/regulars" element={<Chats />} />
          <Route path="/unread" element={<Chats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
