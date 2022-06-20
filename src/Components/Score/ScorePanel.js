import styled, {css} from "styled-components";

const ScorePanel = styled.div`
  width: 200px;
  height: 45%;

  ${(props) => props.playerNumber === "one" && css`
    background: darkslateblue;
  `}

  ${(props) => props.playerNumber === "two" && css`
    background: darkslategray; 
  `}
`;

// const ScorePanel = (props) => {
//   return (
//     <div className="scorePanel">
//       <h2 className="scoreLabel">{props.score}</h2>
//     </div>
//   );
// };

export default ScorePanel;
