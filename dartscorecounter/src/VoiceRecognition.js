import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const VoiceRecognition = () => {
  const {
    transcript,
    resetTranscript,
    finalTranscript,
  } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return alert("Your browser does not support Speech Recognition API!");
  }

  var scores = finalTranscript
    .split(" ")
    .map(Number)
    .filter((el) => el <= 180);

  function AverageScore() {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
    return sum / scores.length;
  }

  return (
    <div>
      <button
        onClick={() =>
          SpeechRecognition.startListening({
            language: "pl",
            continuous: true,
          })
        }
      >
        Start
      </button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{finalTranscript}</p>
      <AverageScore />
    </div>
  );
};

export default VoiceRecognition;
