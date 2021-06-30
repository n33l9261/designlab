import React, { useRef } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import { createSocketConnectionInstance } from "./createSocketConnection.js";

function VideoSessionScreen(props) {
  let socketInstance = useRef(null);
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  const joinhandler = () => {
    // props = { quality: 12 };
    // socketInstance.current = createSocketConnectionInstance({
    //   props,
    // });
    axios.get(`http://localhost:5000/join`).then((res) => {
      props.history?.push(`/videosession/${res.data.link}?quality={$quality}`);
    });
    console.log(props);
  };

  const handleDisconnect = () => {
    // socketInstance.current?.destoryConnection();
    props.history.push("/");
  };

  return (
    <div className="session-screeen">
      <div className="video-screen">
        <div className="webcam-part">
          <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
          />
          <button onClick={capture}>Capture photo</button>
        </div>
        <div className="session-buttons">
          {" "}
          <button className="primary">Microphone on </button>
          <button className="primary">Microphone off </button>
          <button className="primary">Video </button>
          {/* <button className="primary">Active people list</button> */}
        </div>
        <button onClick={joinhandler}>JOin NOw</button>
        <button onClick={handleDisconnect}>Disconnect</button>
      </div>
      <div className="chat-screen">list of user</div>
    </div>
  );
}

export default VideoSessionScreen;
