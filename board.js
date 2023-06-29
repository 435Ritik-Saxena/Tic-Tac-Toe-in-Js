const Cell = require('./cell');

class Board {
  constructor() {
    this.cells = Array.from({ length: 9 }, () => new Cell());
    this.isGameActive = true;
  }

  analyseResult() {
    const winningCombinations = [
      // Rows
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      // Columns
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      // Diagonals
      [0, 4, 8], [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
      const [cell1, cell2, cell3] = combination;
      const symbol = this.cells[cell1].mark;

      if (symbol !== 'z' && this.cells[cell2].mark === symbol && this.cells[cell3].mark === symbol) {
        this.isGameActive = false;

        // Determine the winning player's name
        const winningPlayer = symbol === this.cells[cell1].player0Symbol ? 'Player 1' : 'Player 2';
        console.log(`${winningPlayer} wins!`);

        return winningPlayer;
      }
    }

    // Check if the game is a draw
    const isDraw = this.cells.every(cell => cell.isMarked());

    if (isDraw) {
      this.isGameActive = false;
      console.log('No player wins. The game is a draw.');
      return 'Draw';
    }

    return null;
  }
}

module.exports = Board;













/* const Cell = require('./cell');

class Board {
  constructor() {
    this.cells = Array(9).fill().map(() => new Cell());
    this.isGameActive = true;
  }

  printBoard() {
    const board = this.cells.map(cell => cell.mark || ' ').join(' | ');
    console.log(board);
  }

  analyseResult() {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (this.cells[a].mark && this.cells[a].mark === this.cells[b].mark && this.cells[b].mark === this.cells[c].mark) {
        return this.cells[a].mark === this.player0.symbol ? this.player0.name : this.player1.name;
      }
    }

    return null;
  }
}

module.exports = Board;
 */