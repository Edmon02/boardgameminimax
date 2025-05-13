import { GameBoard } from './game/GameBoard';
import { UIController } from './ui/UIController';

/**
 * @file Main application entry point
 */

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const game = new GameBoard();
  const ui = new UIController(game);
});
