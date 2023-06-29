const Player = require('./player');
const Board = require('./board');

class Game {
  constructor() {
    // Create two players
    this.players = [
      new Player(),
      new Player()
    ];

    this.turn = 0; // Initialize the turn
    this.board = new Board();
  }

  play(cellNo) {
    // Validate if the game is active
    if (!this.board.isGameActive) {
      throw new Error('The game has already ended');
    }

    const currentPlayer = this.players[this.turn];
    currentPlayer.markCell(cellNo, this.board);

    // Switch to the next player's turn
    //this.turn = (this.turn + 1) % this.players.length;
    this.turn= (this.turn+1)%2;

    // Analyze the game result
    this.board.analyseResult();
  }
}

module.exports = Game;















/* const Board = require('./board');
const Player = require('./player');

class Game {
  constructor() {
    this.board = new Board();
    this.player0 = new Player('Player 1', 'X', this.board);
    this.player1 = new Player('Player 2', 'O', this.board);
    this.turn = 0;
  }

  play(cellNo) {
    if (!this.board.isGameActive) {
      throw new Error('Game over. Please start a new game.');
    }

    const currentPlayer = this.turn % 2 === 0 ? this.player0 : this.player1;
    currentPlayer.markCell(cellNo);
    this.board.printBoard();

    const result = this.board.analyseResult();
    if (result) {
      console.log(`${result} wins! Game over.`);
      this.board.isGameActive = false;
    } else if (this.turn === 8) {
      console.log('No player won. It\'s a draw! Game over.');
      this.board.isGameActive = false;
    } else {
      this.turn++;
    }
  }
}

module.exports = Game; */
