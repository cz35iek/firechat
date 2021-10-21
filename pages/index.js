import React from "react";
import SignOut from "../components/SignOut";
import SignIn from "../components/SignIn";
import ChatRoom from "../components/ChatRoom";
import { auth } from "../services/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
