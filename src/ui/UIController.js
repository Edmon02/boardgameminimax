import { GameBoard } from '../game/GameBoard';
import { findBestMove } from '../ai/minimax';

/**
 * @class UIController
 * @description Manages DOM interactions and UI updates
 */
export class UIController {
  /**
   * Create new UI controller
   * @param {GameBoard} game - Game board instance
   */
  constructor(game) {
    this.game = game;
    this.gameBoardElement = document.querySelector('.game-board');
    this.statusDisplay = document.querySelector('.status');
    this.restartBtn = document.querySelector('.restart-btn');
    this.playerSelectX = document.querySelector('#player-x');
    this.playerSelectO = document.querySelector('#player-o');
    this.startBtn = document.querySelector('#start-btn');

    this.setupPlayerSelection();
    this.generateCells();

    // Set up event listeners
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Cell clicks using event delegation
    this.gameBoardElement.addEventListener('click', (e) => {
      const cell = e.target.closest('.cell');
      if (cell) {
        const index = parseInt(cell.dataset.index);
        this.handleCellClick(index);
      }
    });

    // Restart button
    this.restartBtn.addEventListener('click', () => {
      this.handleRestart();
    });
  }

  setupPlayerSelection() {
    this.startBtn.addEventListener('click', () => {
      const humanPlayer = this.playerSelectX.checked ? 'X' : 'O';
      this.game = new GameBoard(humanPlayer);
      this.updateBoard();
      this.setStatus(`${this.game.currentPlayer}'s turn`);

      // If AI goes first
      if (!this.game.isHumanTurn()) {
        setTimeout(() => this.makeAIMove(), 500);
      }
    });
  }

  /**
   * Set up event listeners
   */
  initialize() {
    this.cells.forEach((cell, index) => {
      cell.addEventListener('click', () => this.handleCellClick(index));
    });

    document.querySelector('.restart-btn').addEventListener('click', () => {
      this.game.reset();
      this.updateBoard();
      this.setStatus(`${this.game.currentPlayer}'s turn`);
    });

    this.updateBoard();
    this.setStatus(`${this.game.currentPlayer}'s turn`);
  }

  generateCells() {
    // Clear existing cells
    this.gameBoardElement.innerHTML = '';

    // Create 9 cells
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.index = i;
      this.gameBoardElement.appendChild(cell);
    }

    // Refresh cell references
    this.cells = Array.from(document.querySelectorAll('.cell'));
  }

  /**
   * Handle cell click event
   * @param {number} index - Cell index (0-8)
   */
  handleCellClick(index) {
    // Only allow human moves on human turn
    if (!this.game.isHumanTurn() || this.game.board[index] !== '') return;

    if (this.game.makeMove(index)) {
      this.updateBoard();

      if (!this.game.gameOver && !this.game.isHumanTurn()) {
        setTimeout(() => this.makeAIMove(), 500);
      } else if (this.game.gameOver) {
        this.handleGameEnd();
      }
    }
  }

  /**
   * Make AI move
   */
  makeAIMove() {
    const bestMove = findBestMove(this.game.board, this.game.aiPlayer);
    if (bestMove !== -1 && !this.game.gameOver) {
      this.game.makeMove(bestMove);
      this.updateBoard();

      if (this.game.gameOver) {
        this.handleGameEnd();
      }
    }
  }
  /**
   * Update board display
   */
  updateBoard() {
    this.cells.forEach((cell, index) => {
      cell.textContent = this.game.board[index];
    });
  }

  /**
   * Handle game end state
   */
  handleGameEnd() {
    if (this.game.checkWin()) {
      this.setStatus(`${this.game.currentPlayer} wins!`);
    } else {
      this.setStatus("Game ended in a tie!");
    }
  }

  /**
   * Update status display
   * @param {string} message - Status message
   */
  setStatus(message) {
    this.statusDisplay.textContent = message;
  }

  handleRestart() {
    // Reset game state
    this.game.reset();

    // Regenerate cells (clean slate)
    this.generateCells();

    // Update UI
    this.updateBoard();
    this.setStatus(`${this.game.currentPlayer}'s turn`);

    // If AI goes first
    if (!this.game.isHumanTurn()) {
      setTimeout(() => this.makeAIMove(), 500);
    }
  }
}
