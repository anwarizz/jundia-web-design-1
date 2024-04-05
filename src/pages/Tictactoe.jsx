import React, { useState } from 'react';

function Square({ value, onClick }) {
  return (
    <button
      className="md:w-[105px] md:h-[105px] h-16 w-16 bg-[#18171d] border-none text-white md:text-[35px] text-[26px] font-bold"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    const newSquares = squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  function renderSquare(i) {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  }

  const winner = calculateWinner(squares);
  let status;
  
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div>
      {/* <div className="mb-5 text-white font-bold">{status}</div> */}
      <div className="grid grid-cols-3 md:gap-[5px] gap-[2px] bg-white">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="max-w-xs mx-auto mt-8">
      <Board />
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
}

function TicTacToe() {
  return (
    <div className="md:flex justify-center items-center rotate-4 border-none md:pt-[170px] pt-0 pr-[20px] hidden">
      <Game />
    </div>
  );
}

export default TicTacToe;
