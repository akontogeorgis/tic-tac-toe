import React from 'react';

function Square({ value, onClick, isWinnerSquare }) {
	return (
		<button
			type="button"
			className={`square ${isWinnerSquare ? 'highlight-winner' : ''} `}
			onClick={onClick}
		>
			{value}
		</button>
	);
}

export default Square;
