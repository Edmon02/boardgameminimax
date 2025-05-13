/**
 * @file Tic-Tac-Toe game constants
 * @module constants
 */

/**
 * All possible winning combinations for Tic-Tac-Toe
 * @constant {number[][]}
 */
export const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]             // diagonals
];

/**
 * Game symbols
 * @constant {Object}
 */
export const PLAYERS = {
  HUMAN: 'X',
  AI: 'O'
};
