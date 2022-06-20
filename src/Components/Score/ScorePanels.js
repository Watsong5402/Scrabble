import ScorePanel from "./ScorePanel";
import ScoreLabel from "./ScoreLabel";

const ScorePanels = (props) => {
  return <div className="scorePanels">
    <ScoreLabel>SCORE</ScoreLabel>
    <ScorePanel playerNumber="one">{props.playerOneScore}</ScorePanel>
    <ScorePanel playerNumber="two">{props.playerTwoScore}</ScorePanel>
  </div>;
};

export default ScorePanels;