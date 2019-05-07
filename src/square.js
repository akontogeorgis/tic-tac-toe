import React from 'react';
import './index.css';

 function Square ({value, onClick, isWinnerSquare}){ //afou den exei state pleon kai to kalei h board thn kanw funtion + kanw destructure kai anti na dexomai props ws orisma, to pairnw ws { value, klp} gia na pairnw ayta poy xreiazomai kai na mhn grafw meta synexeia props.value, props.onClick klpo..para mono sketo value...kai den allazw tipota sto board!
    return (
      <button
        className = {`square ${isWinnerSquare ? 'highlight-winner' : ''} `}
        onClick={onClick}>
          {value}
      </button>
    );
}

export default Square;
