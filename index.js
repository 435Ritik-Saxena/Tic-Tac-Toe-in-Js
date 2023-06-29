
const Game = require('./game');

try {
  
  const game1 = new Game();

  // Set the names and symbols for player0 and player1
  game1.players[0].setName('Mahesh');
  game1.players[0].setSymbol('X');
  game1.players[1].setName('Pushpendra');
  game1.players[1].setSymbol('O');

  game1.play(2);
  game1.play(3);
  game1.play(5);
  game1.play(1);
  game1.play(7);
  game1.play(8);
  game1.play(6);
  game1.play(4);
  game1.play(0);
  
} catch (error) {
  console.error(error);
}









