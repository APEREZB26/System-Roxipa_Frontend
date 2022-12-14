import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import io from "socket.io-client";
import "../../styles/chat.css";

const socket = io("http://localhost:3000");

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const {user} = useAuth();

  useEffect(() => {
    const receiveMessage = (message) => {
      setMessages([...messages ,message]);
    };

    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, [messages,user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      body: message,
      from: user.fullname,
      id: user._id
    };
    setMessages([...messages, newMessage]);
    socket.emit("message", newMessage);
  };

  const [addClass, setaddClass] = useState(false);

  const activeButton = () => {
    setaddClass(true);
  };
  const noActiveButton = () => {
    setaddClass(false);
  };

  return (
    <div>
      <button className="chatButton" onClick={activeButton}>
        <FontAwesomeIcon icon={faQuestionCircle} />
      </button>
      <div className={`chatContainer${addClass ? " active" : ""}`}>
        <div className="chatHeader">
          <button className="exit" onClick={noActiveButton}>
            <FontAwesomeIcon icon={faCircleArrowLeft} />
          </button>
          <p>Atención al Cliente</p>
        </div>
        <div className="chatBody">
          <ul className="h-80 overflow-y-auto">
            {messages.map((message, index) => (
              <li
                key={index}
                className={`${ message.from === user.fullname ? "sender" : "receiver"
                }`}
              >
                <b>{message.from}</b>:{message.body}
              </li>
            ))}
          </ul>
        </div>
        <div className="chatFooter">
          <form onSubmit={handleSubmit}>
            <input
              name="message"
              type="text"
              placeholder="Write your message..."
              onChange={(e) => {
                setMessage(e.target.value);
                console.log(e.target.value)
              }}
              value={message}
              autoFocus
            ></input>
            <button type="Submit" className="send"><FontAwesomeIcon icon={faPaperPlane} /></button>
          </form>
        </div>
      </div>
    </div>
  );
};
