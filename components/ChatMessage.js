import React from "react";
import { auth } from "../services/firebase-config";

const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || ""} />
        <p>{text}</p>
      </div>
    </>
  );
};

export default ChatMessage;
