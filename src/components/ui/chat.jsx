import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import "../../styles/chat.css";

const socket = io("http://localhost:3000");

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const receiveMessage = (message) => {
      setMessages([message, ...messages]);
    };

    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, [messages]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      body: message,
      from: "Me",
    };
    setMessages([newMessage, ...messages]);
    setMessage("");
    socket.emit("message", newMessage.body);
  };

  const [addClass, setaddClass] = useState(false);

  const activeButton = () => {
    setaddClass(true);
  };
  const noActiveButton = () => {
    setaddClass(false);
  };

  return (
    // <div className="h-screen bg-zinc-800 text-white flex items-center justify-center">
    //   <form onSubmit={handleSubmit} className="bg-zinc-900 p-10">
    //     <h1 className="text-2xl font-bold my-2">Chat React</h1>
    //     <input
    //       name="message"
    //       type="text"
    //       placeholder="Write your message..."
    //       onChange={(e) => setMessage(e.target.value)}
    //       className="border-2 border-zinc-500 p-2 w-full text-black"
    //       value={message}
    //       autoFocus
    //     />

    //     <ul className="h-80 overflow-y-auto">
    //       {messages.map((message, index) => (
    //         <li
    //           key={index}
    //           className={`my-2 p-2 table text-sm rounded-md ${
    //             message.from === "Me" ? "bg-sky-700 ml-auto" : "bg-black"
    //           }`}
    //         >
    //           <b>{message.from}</b>:{message.body}
    //         </li>
    //       ))}
    //     </ul>
    //   </form>
    // </div>

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
                className={`${ message.from === "Me" ? "sender" : "receiver"
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
