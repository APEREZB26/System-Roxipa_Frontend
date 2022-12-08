import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import {faQuestionCircle} from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import "../../styles/chat.css";

export const Chat = () => {
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
          <li>Mensaje N°1</li>
          <li>Mensaje N°2</li>
          <li>Mensaje N°3</li>
          <li>Mensaje N°4</li>
          <li>Mensaje N°5</li>
          <li>Mensaje N°1</li>
          <li>Mensaje N°2</li>
          <li>Mensaje N°3</li>
          <li>Mensaje N°4</li>
          <li>Mensaje N°5</li>
        </div>
        <div className="chatFooter">
          <input type="text"></input>
          <FontAwesomeIcon className="send" icon={faPaperPlane} />
        </div>
      </div>
    </div>
  );
};
