import { GameBoard } from '../src/game/GameBoard';

describe('GameBoard', () => {
  test('initializes empty board', () => {
    const game = new GameBoard();
    expect(game.board.every(cell => cell === '')).toBe(true);
  });
});
