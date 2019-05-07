import React from 'react';
import './index.css';
import Square from './square';

 function Board ({square, onClick, winnerLine = []}) {

      const size = 3;

      const squares = Array.from({ length: size }).map((item1, i) =>

          (
            <div key={i} className="board-row">{

              Array.from({ length: size }).map((item2, j) => {

                  const cell = i * size + j;
                  return (<Square
                          value = {square[cell]}
                          onClick = {() => onClick(cell)}
                          isWinnerSquare = {winnerLine.includes(cell)}
                          key = {cell}
                          />);
              })
            }</div>
          )
      );

      return (
        <>{squares}</>
      );

}

 export default Board;



/* as class
import React from 'react';
import './index.css';
import Square from './square';

 class Board extends React.Component {
   static defaultProps = {
     winnerLine: []
   }

  renderSquare(i,isWinnerSquare) {
    return(
      <Square
        value = {this.props.squares[i]}
        onClick = {() => this.props.onClick(i)}
        isWinnerSquare = {isWinnerSquare}
      />
    );
  }

  render() {

      const size = 3;

      const squares = Array.from({ length: size }).map((item1, i) =>

          (
            <div key={i} className="board-row">{

              Array.from({ length: size }).map((item2, j) => {

                  const cell = i * size + j;

                  return this.renderSquare(cell, this.props.winnerLine.includes(cell));
              })
            }</div>
          )
      );

      return (
        <>{squares}</>
      );
  }
}

 export default Board;
*/
