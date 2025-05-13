import { WIN_PATTERNS, PLAYERS } from '../utils/constants';

/**
 * @class GameBoard
 * @description Manages Tic-Tac-Toe game state and logic
 */
export class GameBoard {
  /**
   * Create a new game board
   */
  constructor(humanPlayer = 'X') {
    this.board = Array(9).fill('');
    this.humanPlayer = humanPlayer;
    this.aiPlayer = humanPlayer === 'X' ? 'O' : 'X';
    this.currentPlayer = 'X'; // X always starts
    this.gameOver = false;
  }

  /**
 * Check if current turn is human's turn
 * @returns {boolean}
 */
  isHumanTurn() {
    return this.currentPlayer === this.humanPlayer;
  }

  /**
   * Make a move on the board
   * @param {number} index - Cell index (0-8)
   * @returns {boolean} True if move was valid
   */
  makeMove(index) {
    if (this.gameOver || this.board[index] !== '') return false;

    this.board[index] = this.currentPlayer;
    if (this.checkWin()) {
      this.gameOver = true;
      return true;
    }

    if (this.checkTie()) {
      this.gameOver = true;
      return true;
    }

    this.switchPlayer();
    return true;
  }

  /**
   * Check if current player has won
   * @returns {boolean}
   */
  checkWin() {
    return WIN_PATTERNS.some(pattern =>
      pattern.every(index => this.board[index] === this.currentPlayer)
    );
  }

  /**
   * Check if game is tied
   * @returns {boolean}
   */
  checkTie() {
    return !this.board.includes('');
  }

  /**
   * Switch current player
   */
  switchPlayer() {
    this.currentPlayer =
      this.currentPlayer === PLAYERS.HUMAN ? PLAYERS.AI : PLAYERS.HUMAN;
  }

  /**
   * Reset game state
   */
  reset() {
    this.board = Array(9).fill('');
    this.currentPlayer = PLAYERS.HUMAN;
    this.gameOver = false;
  }
}
