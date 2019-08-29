import React from 'react';
import Board from './board';
import * as Minesweeper from "../minesweeper";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(10, 10)
    };
    this.updateGame = this.updateGame.bind(this);
  }
  
  updateGame (tile, flagged) {
    
    if (!flagged) {
      tile;
    } else {
      
    }
    
  }

  render() {
    return (
      <div>
        <Board board={this.state.board} update={this.updateGame}/>
      </div>
    )
  }

}

export default Game;