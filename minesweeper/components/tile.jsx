import React from 'react';
// import { Tile } from '../minesweeper';
import * as Minesweeper from "../minesweeper";

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  handleClick (e) {
    if (e.altKey) {
      this.props.update(this.props.tile1, e.altKey );
    } else {
      
    }
  }

  render() {
    // let tile = this.props.tile1;
      
    return (
      <div className="tile" onClick={(e) => this.handleClick(e)}>{this.props.tile1.adjacentBombCount()}</div>
    //   if (this.explored ) {
    //     <div class="bombed"></div>
    //   }
      
    //   <div class="revealed"></div>
    //   <div class="flagged"></div>
    // );
    )
  }

}

export default Tile;