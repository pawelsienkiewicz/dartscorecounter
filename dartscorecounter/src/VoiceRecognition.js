import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const VoiceRecognition = () => {
  const { resetTranscript, finalTranscript } = useSpeechRecognition();

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
    return (sum / scores.length).toFixed(2);
  }

  var lastScore = scores[scores.length - 1];

  return (
    <div>
      <button
        onClick={() =>
          SpeechRecognition.startListening({
            language: "en-US",
            continuous: true,
          })
        }
      >
        Start
      </button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      {finalTranscript.length === 0 ? (
        <p>Scores: 0</p>
      ) : (
        <p>Scores: {finalTranscript} </p>
      )}
      <p>Last dart: {lastScore}</p>
      <p>
        Average score: <AverageScore />
      </p>
    </div>
  );
};

export default VoiceRecognition;
