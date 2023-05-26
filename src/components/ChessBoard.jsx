import { StyledSlot, StyledBoard, LabelCol, LabelRow } from "./styles/Board";
import bishopDark from "../assets/bishopDark.png";
import bishopLight from "../assets/bishopLight.png";
import kingDark from "../assets/kingDark.png";
import kingLight from "../assets/kingLight.png";
import knightDark from "../assets/knightDark.png";
import knightLight from "../assets/knightLight.png";
import pawnDark from "../assets/pawnDark.png";
import pawnLight from "../assets/pawnLight.png";
import queenDark from "../assets/queenDark.png";
import queenLight from "../assets/queenLight.png";
import rookDark from "../assets/rookDark.png";
import rookLight from "../assets/rookLight.png";


const ChessSlot = (props) => <StyledSlot light={props.light}>{props.children}</StyledSlot>

const chessArray = [];

// chessArray.push(<StyledLabel></StyledLabel>);
for (let i = 0; i < 8; i++) {
  const label = String.fromCharCode(97 + i);
  chessArray.push(<LabelCol>{label}</LabelCol>);
}

for (let row = 0; row < 8; row++) {
    chessArray.push(<LabelRow>{8 - row}</LabelRow>)
  for (let col = 0; col < 8; col++) {
      const isLightSlot = (row + col) % 2 === 0;
      const position = String.fromCharCode(97 + col) + (8 - row);
    if (isLightSlot) {
      chessArray.push(<ChessSlot key={position} light position={position} id={position}/>);
    } else {
      chessArray.push(<ChessSlot key={position} position={position} id={position}/>);
    }
    // chessArray.push(<StyledLabel>{String.fromCharCode(97 + row)}</StyledLabel>)
  }
}

function updateChessArray(array, id, imageSource) {
    const updatedElements = array.map((element) => {
      if (element.props.id === id) {
        const { position, id, light } = element.props;
        return (
          <ChessSlot key={id} position={position} id={id} light={light}>
            <img src={imageSource} />
          </ChessSlot>
        );
      }
      return element;
    });
  
    return updatedElements;
  }
  
let updatedElements = updateChessArray(chessArray, "a8", rookDark)
// Update the remaining elements of the chessboard
updatedElements = updateChessArray(updatedElements, "b8", bishopDark);
updatedElements = updateChessArray(updatedElements, "c8", knightDark);
updatedElements = updateChessArray(updatedElements, "d8", queenDark);
updatedElements = updateChessArray(updatedElements, "e8", kingDark);
updatedElements = updateChessArray(updatedElements, "f8", bishopDark);
updatedElements = updateChessArray(updatedElements, "g8", knightDark);
updatedElements = updateChessArray(updatedElements, "h8", rookDark);

// Update the second row (a7-h7) with the pawn pieces
updatedElements = updateChessArray(updatedElements, "a7", pawnDark);
updatedElements = updateChessArray(updatedElements, "b7", pawnDark);
updatedElements = updateChessArray(updatedElements, "c7", pawnDark);
updatedElements = updateChessArray(updatedElements, "d7", pawnDark);
updatedElements = updateChessArray(updatedElements, "e7", pawnDark);
updatedElements = updateChessArray(updatedElements, "f7", pawnDark);
updatedElements = updateChessArray(updatedElements, "g7", pawnDark);
updatedElements = updateChessArray(updatedElements, "h7", pawnDark);

for (let col = 0; col < 8; col++) {
    const position = String.fromCharCode(97 + col) + "2";
    updatedElements = updateChessArray(updatedElements, position, pawnLight);
  }

updatedElements = updateChessArray(updatedElements, "a1", rookLight);
updatedElements = updateChessArray(updatedElements, "b1", knightLight);
updatedElements = updateChessArray(updatedElements, "c1", bishopLight);
updatedElements = updateChessArray(updatedElements, "d1", queenLight);
updatedElements = updateChessArray(updatedElements, "e1", kingLight);
updatedElements = updateChessArray(updatedElements, "f1", bishopLight);
updatedElements = updateChessArray(updatedElements, "g1", knightLight);
updatedElements = updateChessArray(updatedElements, "h1", rookLight);
// const updatedElements = chessArray.map((element) => {
//     if (element.props.id === "b8") {
//         const { position, id, light } = element.props
//       return (
//             <ChessSlot 
//             key={id} position={position} id={id} light={light}>
//                 <img src={bishopDark} />
//             </ChessSlot>
//             )
//     } 
//     return element
// })




function ChessBoard() {
    return (
        <StyledBoard>
            {/* <img src={bishopDark} /> */}
            {updatedElements}
        </StyledBoard>
    )
}


export default ChessBoard