import Tile from "./Tile";
import "./Board.css";
const Board = (props) => {
  const board = props.boardData;
  return (
    <table className="tileTable">
      <tbody>
        {board.map((row, i) => (
          <tr className="tileRow">
            {row.map((ele, j) => (
              <Tile modifier={ele}>{props.boardValues[i][j]}</Tile>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Board;
