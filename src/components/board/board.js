import React from 'react';
import Square from '../square/square';

function Board({ square, onClick, winnerLine = [] }) {
	const size = 3;

	const squares = Array.from({ length: size }).map((item1, i) => (
		<div key={i} className="board-row">
			{
				Array.from({ length: size }).map((item2, j) => {
					const cell = i * size + j;
					return (
						<Square
							value={square[cell]}
							onClick={() => onClick(cell)}
							isWinnerSquare={winnerLine.includes(cell)}
							key={cell}
						/>
					);
				})
			}
		</div>
	));

	return (
		<>{squares}</>
	);
}

export default Board;
