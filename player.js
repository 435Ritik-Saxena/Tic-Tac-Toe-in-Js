class Player {
    constructor() {
      this.name = '';
      this.symbol = '';
    }
  
    setName(name) {
      // Validate the name input
      if (typeof name !== 'string' || name.trim() === '') {
        throw new Error('Invalid player name');
      }
  
      this.name = name.trim();
    }
  
    setSymbol(symbol) {
      // Validate the symbol input
      if (typeof symbol !== 'string' || symbol.trim() === '') {
        throw new Error('Invalid player symbol');
      }
  
      this.symbol = symbol.trim();
    }
  
    markCell(cellNo, board) {
      // Validate the cell number input
      if (!Number.isInteger(cellNo) || cellNo < 0 || cellNo >= 9) {
        throw new Error('Invalid cell number');
      }
  
      // Check if the cell is already marked
      if (board.cells[cellNo].isMarked()) {
        throw new Error('Cell already marked');
      }
  
      // Mark the specified cell with the player's symbol
      board.cells[cellNo].mark = this.symbol;
  
      console.log(`${this.name} marked cell ${cellNo}`);
    }
  }
  
  module.exports = Player;
  
  









/* class Player {
    constructor(name, symbol, board) {
      this.name = name;
      this.symbol = symbol;
      this.board = board;
    }
  
    markCell(cellNo) {
      if (typeof cellNo !== 'number' || cellNo < 0 || cellNo > 8) {
        throw new Error('Invalid cell number. Cell number should be between 0 and 8.');
      }
  
      const cell = this.board.cells[cellNo];
      if (cell.isMarked()) {
        throw new Error('Cell already marked.');
      }
  
      cell.mark = this.symbol;
    }
}
  
  module.exports = Player;
   */