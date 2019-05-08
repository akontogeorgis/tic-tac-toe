import React from 'react';
import './index.css';

 function Square ({value, onClick, isWinnerSquare}){ 
      <button
        className = {`square ${isWinnerSquare ? 'highlight-winner' : ''} `}
        onClick={onClick}>
          {value}
      </button>
    );
}

export default Square;
