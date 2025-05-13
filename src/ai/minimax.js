import { WIN_PATTERNS, PLAYERS } from '../utils/constants';

/**
 * @namespace AI
 * @description Contains AI logic for Tic-Tac-Toe
 */

/**
 * Evaluates board state for Minimax algorithm
 * @param {string[]} board - Current game board
 * @param {string} player - Player to evaluate for
 * @returns {number} Score (-10 to 10)
 */
function evaluateBoard(board, player) {
  const opponent = player === PLAYERS.AI ? PLAYERS.HUMAN : PLAYERS.AI;

  if (WIN_PATTERNS.some(pattern =>
    pattern.every(index => board[index] === player)
  )) return 10;

  if (WIN_PATTERNS.some(pattern =>
    pattern.every(index => board[index] === opponent)
  )) return -10;

  return 0;
}

function minimax(board, depth, isMaximizing, aiPlayer, humanPlayer) {
  const winner = checkWinner(board);
  if (winner === aiPlayer) return 10 - depth;
  if (winner === humanPlayer) return -10 + depth;
  if (isBoardFull(board)) return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === '') {
        board[i] = aiPlayer;
        const score = minimax(board, depth + 1, false, aiPlayer, humanPlayer);
        board[i] = '';
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === '') {
        board[i] = humanPlayer;
        const score = minimax(board, depth + 1, true, aiPlayer, humanPlayer);
        board[i] = '';
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
}

/**
 * Finds best move for AI using Minimax
 * @param {string[]} board - Current game state
 * @param {string} aiPlayer - AI player ('X' or 'O')
 * @returns {number} Index of best move (0-8)
 */
export function findBestMove(board, aiPlayer) {
  // If center is empty, take it (optimal first move)
  if (board[4] === '' && board.filter(c => c !== '').length < 2) return 4;

  let bestScore = -Infinity;
  let bestMove = -1;
  const humanPlayer = aiPlayer === 'X' ? 'O' : 'X';

  for (let i = 0; i < 9; i++) {
    if (board[i] === '') {
      board[i] = aiPlayer;
      const score = minimax(board, 0, false, aiPlayer, humanPlayer);
      board[i] = '';

      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }
  return bestMove;
}

function checkWinner(board) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function isBoardFull(board) {
  return board.every(cell => cell !== '');
}