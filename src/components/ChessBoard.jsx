import { StyledSlot, StyledBoard, LabelCol, LabelRow } from "./styles/Board";
import { useEffect, useState, useRef } from "react";
import React from "react";
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

// create a component for each individual chess slot
const ChessSlot = (props) => {
    // const [isActive, setIsActive] = useState(false)
    // const handleClick = () => setIsActive(prevState => !prevState)
    // const className = isActive ? "active" : ""

    return (
        <StyledSlot 
            light={props.light} 
            // className={className }
            onClick={() => props.handleClick(props.id)}
            image={props.image}
            >
            {props.image && <img src={props.image} />}
        </StyledSlot>
    )
}


function ChessBoard() {

    // function to create the board by pushing all needed pieces into
    // the array
    function createBoard(chessArray) {
        // push the labels of the rows to the array
        for (let i = 0; i < 8; i++) {
            const label = String.fromCharCode(97 + i);
            chessArray.push(<LabelCol key={label} >{label}</LabelCol>);
            }
        
            // loop and create the board by pushing individual slots to 
            // the array. initializing whether they should be dark or light
            // and giving them id to identify each one "a8", "b8" etc
            for (let row = 0; row < 8; row++) {
                // push the label for the columns into the array 
                chessArray.push(<LabelRow key={row}>{8 - row}</LabelRow>)
            for (let col = 0; col < 8; col++) {
                const isLightSlot = (row + col) % 2 === 0;
                const position = String.fromCharCode(97 + col) + (8 - row);
                if (isLightSlot) {
                chessArray.push(<ChessSlot key={position} light handleClick={handleClick} id={position}/>);
                } else {
                chessArray.push(<ChessSlot key={position} handleClick={handleClick} id={position}/>);
                }
            }
        }
        return chessArray
    }


    // function to update the board with the piece image
    // can also be used in moving i think
    // maybe create a different function for removing image after
    // a piece has been moved ? 
    // function updateBoard(array, id, imageSource) {
    //     const updatedElements = array.map((element) => {
    //     if (element.props.id === id) {
    //         const { id, light } = element.props;
    //         return (
    //         <ChessSlot 
    //             key={id} 
    //             id={id} 
    //             light={light}
    //             handleClick={handleClick}
    //             image={imageSource}
    //         >
    //             {/* <img src={imageSource} /> */}
    //         </ChessSlot>
    //         );
    //     }
    //     return element;
    //     });  
    //     return updatedElements;
    // }
    function updateBoard(array, id, imageSource) {
        const updatedElements = array.map((element) => {
          if (element.props.id === id) {
            return React.cloneElement(element, { image: imageSource });
          }
          return element;
        });
      
        return updatedElements;
      }
      
 
    // initialize the chessboard to the default state
    function createDefaultBoard() {
        let chessArray = []
        chessArray = createBoard(chessArray)

        // loop and update the pawn pieces
        for (let num = 0; num < 8; num++) {
        const char = String.fromCharCode(97 + num);
        chessArray = updateBoard(chessArray, char + "7", pawnDark);
        }

        for (let col = 0; col < 8; col++) {
            const position = String.fromCharCode(97 + col) + "2";
            chessArray = updateBoard(chessArray, position, pawnLight);
        }

        // Update the remaining elements of the chessboard
        chessArray = updateBoard(chessArray, "a8", rookDark)
        chessArray = updateBoard(chessArray, "b8", bishopDark);
        chessArray = updateBoard(chessArray, "c8", knightDark);
        chessArray = updateBoard(chessArray, "d8", queenDark);
        chessArray = updateBoard(chessArray, "e8", kingDark);
        chessArray = updateBoard(chessArray, "f8", bishopDark);
        chessArray = updateBoard(chessArray, "g8", knightDark);
        chessArray = updateBoard(chessArray, "h8", rookDark);

        chessArray = updateBoard(chessArray, "a1", rookLight);
        chessArray = updateBoard(chessArray, "b1", knightLight);
        chessArray = updateBoard(chessArray, "c1", bishopLight);
        chessArray = updateBoard(chessArray, "d1", queenLight);
        chessArray = updateBoard(chessArray, "e1", kingLight);
        chessArray = updateBoard(chessArray, "f1", bishopLight);
        chessArray = updateBoard(chessArray, "g1", knightLight);
        chessArray = updateBoard(chessArray, "h1", rookLight);

        // chessArray = updateBoard(chessArray, "a8", "")

        return chessArray
    }
    
    // hook to keep track of the current state of the board
    const [currentBoard, setCurrentBoard] = useState(createDefaultBoard())

    // keep track of the selected slot
    // const [selectedSlot, setSelectedSlot] = useState(null)
    const slotRef = useRef(null)
    
    useEffect(() => {
        setCurrentBoard(prevBoard => {
            return prevBoard = updateBoard(prevBoard, "a8", "")
        })
        // console.log(selectedSlot)
    },[])

    function handleClick (slotId) {
        // console.log(slotId)
        const slotIndex = () => {
            for (const slot of currentBoard) {
            const { id } = slot.props
            if (id === slotId) {
                return currentBoard.indexOf(slot)
            }
        }}

        const active = currentBoard[slotIndex()]
        console.log(active.props.image)
        // setCurrentBoard(prevBoard => {
        //     return updateBoard(prevBoard, active.props.id, "")
        // })
        if (active.props.image) {
            slotRef.current = active
            // setSelectedSlot(active)
            // console.log(selectedSlot)
        } else if (slotRef.current && !active.props.image) {
            console.log("reached")
            setCurrentBoard(prevBoard => {
                const { image, id } = slotRef.current.props
                slotRef.current = null
                console.log(id)
                let newBoard = updateBoard(prevBoard, id, "")
                newBoard = updateBoard(newBoard, active.props.id , image)
                return newBoard
            })
        }
    }





    return (
        <StyledBoard>
            {currentBoard}
        </StyledBoard>
    )
}


export default ChessBoard