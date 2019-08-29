import React from 'react';
import Tile from './tile';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div className="grid">
        {this.props.board.grid.map( (row, idx) => (
          <div >
            {row.map( (tile2, idx2) => (
              <Tile tile1={tile2} key={`${idx},${idx2}`} update={this.props.update} />
        ))}
          </div>
          )
        )}
      </div>
    )
  }
  
}

export default Board;