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

const notYetVotedComponent = "NOT YET VOTED";
const noOpinionComponent = "NO OPINION";
const disagreeComponent = "DISAGREE";
const agreeComponent = "AGREE";

const voteTypes = {
  NotYetVoted: "NotYetVoted",
  NoOpinion: "NoOpinion",
  Disagree: "Disagree",
  Agree: "Agree"
};

export default function App() {
  const [vote, setVote] = useState(voteTypes.NotYetVoted);

  let voteIndex = 1;
  let votingComponents = [disagreeComponent, agreeComponent];
  switch (vote) {
    case voteTypes.Agree:
      break;
    case voteTypes.Disagree:
      voteIndex = 0;
      break;
    case voteTypes.NoOpinion:
      votingComponents = [disagreeComponent, noOpinionComponent, agreeComponent];
      break;
    default:
      votingComponents = [disagreeComponent, notYetVotedComponent, agreeComponent];
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
//<button onClick={toggle}>Toggle between 2 and 3 slides</button>
