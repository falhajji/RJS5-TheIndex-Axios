import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => (
  <div className="spinner mx-auto text-center">
    <FontAwesomeIcon icon={faSpinner} spin size="4x" />
    <h1>Hello World!</h1>
    <div />
    <iframe
      src="https://giphy.com/embed/35EpkElYuNCaXzLXNA"
      width="480"
      height="270"
      frameBorder="0"
      className="giphy-embed"
      allowFullScreen
    />
  </div>
);

export default Loading;
