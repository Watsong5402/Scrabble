import React, { Fragment } from "react";
import Board from "./Components/Board";
import Fancy from "./Components/Fancy";
import "./App.css";

const boardData = [
  ["TW", "", "", "DL", "", "", "", "TW", "", "", "", "DL", "", "", "TW"],
  ["", "DW", "", "", "", "TL", "", "", "", "TL", "", "", "", "DW", ""],
  ["", "", "DW", "", "", "", "DL", "", "DL", "", "", "", "DW", "", ""],
  ["DL", "", "", "DW", "", "", "", "DL", "", "", "", "DW", "", "", "DL"],
  ["", "", "", "", "DW", "", "", "", "", "", "DW", "", "", "", ""],
  ["", "TL", "", "", "", "TL", "", "", "", "TL", "", "", "", "TL", ""],
  ["", "", "DL", "", "", "", "DL", "", "DL", "", "", "", "DL", "", ""],
  ["TW", "", "", "DL", "", "", "", "DW", "", "", "", "DL", "", "", "TW"],
  ["", "", "DL", "", "", "", "DL", "", "DL", "", "", "", "DL", "", ""],
  ["", "TL", "", "", "", "TL", "", "", "", "TL", "", "", "", "TL", ""],
  ["", "", "", "", "DW", "", "", "", "", "", "DW", "", "", "", ""],
  ["DL", "", "", "DW", "", "", "", "DL", "", "", "", "DW", "", "", "DL"],
  ["", "", "DW", "", "", "", "DL", "", "DL", "", "", "", "DW", "", ""],
  ["", "DW", "", "", "", "TL", "", "", "", "TL", "", "", "", "DW", ""],
  ["TW", "", "", "DL", "", "", "", "TW", "", "", "", "DL", "", "", "TW"],
];

const boardValues = [
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "C", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "R", "A", "R", "E", "R", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "A", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "B", "U", "X", "O", "M", "", "", ""],
  ["", "", "", "", "", "", "", "S", "", "", "", "O", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "S", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "Q", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "U", "", "", "P"],
  ["", "", "", "", "", "", "", "", "", "", "", "E", "", "", "A"],
  ["", "", "", "", "", "", "", "", "", "", "", "S", "O", "A", "P"],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "I"],
];

function App() {
  return (
    <React.Fragment className="App">
      <Board boardData={boardData} boardValues={boardValues}></Board>
      <Fancy>SCRABBLE</Fancy>
      <footer>Scrabble for Scrabble's sake.</footer>
    </React.Fragment>
  );
}

export default App;
