import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const VoiceRecognition = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return alert("Your browser does not support Speech Recognition API!");
  }

  return (
    <div>
      <button
        onClick={SpeechRecognition.startListening({
          continuous: true,
          language: "pl",
        })}
      >
        Start
      </button>
      <button onClick={SpeechRecognition.abortListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};

export default VoiceRecognition;
