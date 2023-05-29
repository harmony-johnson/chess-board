function generateChessBoard() {
    const chessboard = [];
    const pieceOrder = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];
  
    for (let row = 8; row >= 1; row--) {
      for (let col = 97; col <= 104; col++) {
        const column = String.fromCharCode(col);
        const id = column + row;
        const isLightSlot = (row + col) % 2 !== 0;
        let image = undefined;
  
        if (row === 1 || row === 8) {
          // Set image for pieces in the default location (1st and 8th row)
          const pieceIndex = Math.abs(col - 104); // Determine the index for the corresponding piece
          image = `/src/assets/${pieceOrder[pieceIndex]}${row === 1 ? "Light" : "Dark"}.png`;
        } else if (row === 2 || row === 7) {
          // Set image for pawns in the default location (2nd and 7th row)
          image = `/src/assets/pawn${row === 2 ? "Light" : "Dark"}.png`;
        }
  
        chessboard.push({
          id,
          image,
          light: isLightSlot,
        });
      }
    }
  
    return chessboard;
  }
  
export default generateChessBoard

