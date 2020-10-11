import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import "./styles.css";

const slideStyle = {
  border: "3px solid black",
  height: "400px",
  textAlign: "center",
  fontWeight: "bold",
  padding: "15px"
};

const voteTypes = {
  NotYetVoted: "NOT YET VOTED",
  NoOpinion: "NO OPINION",
  Disagree: "DISAGREE",
  Agree: "AGREE"
};

export default function App() {
  const [vote, setVote] = useState(voteTypes.NotYetVoted);

  let voteIndex = 1;
  let votingComponents = [voteTypes.Disagree, voteTypes.Agree];
  switch (vote) {
    case voteTypes.Agree:
      break;
    case voteTypes.Disagree:
      voteIndex = 0;
      break;
    case voteTypes.NoOpinion:
      votingComponents = [voteTypes.Disagree, voteTypes.NoOpinion, voteTypes.Agree];
      break;
    default:
      votingComponents = [voteTypes.Disagree, voteTypes.NotYetVoted, voteTypes.Agree];
      break;
  }

  function submitVote(index) {
    setVote(index === 0 ? voteTypes.Disagree : voteTypes.Agree);
  }

  function voteNoOpinion() {
    setVote(voteTypes.NoOpinion);
  }

  return (
    <>
      Vote: {vote} {voteIndex}
      <SwipeableViews index={voteIndex} onChangeIndex={submitVote}>
        {votingComponents.map((s) => (
          <div style={slideStyle}>{s}</div>
        ))}
      </SwipeableViews>
      <button onClick={voteNoOpinion}>No opinion</button>
    </>
  );
}
