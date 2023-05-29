import { StyledSlot, StyledBoard, LabelCol, LabelRow } from "./styles/Board";
import { useEffect, useState, useRef } from "react";
import React from "react";
import generateChessBoard from "./boardData";

// create a component for each individual chess slot
const ChessSlot = (props) => {
    return (
        <StyledSlot 
            light={props.light} 
            onClick={() => props.handleClick(props.id)}
            image={props.image}
            className={props.active ? "active" : ""}
        >
            {props.image && <img src={props.image} />}
        </StyledSlot>
    )
}

export default function ChessBoard() {
    const boardData = useRef(generateChessBoard())
    const [activeSlot, setActiveSlot] = useState(null)
    const [boardDisplay, setBoardDisplay] = useState(createBoard())
    
    // function to create the board by from the current board data 
    // pushing all needed pieces into the array
    function createBoard() {
        const chessArray = boardData.current.map(slot => {
            return <ChessSlot 
                {...slot} 
                key={slot.id} 
                handleClick={handleClick} 
                active={activeSlot === slot.id}
            >
            </ChessSlot>
        })
        return chessArray
    }    

    // function to update the board with the piece image
    function updateBoard(id, imageSource) {
        boardData.current = boardData.current.map(slot => {
            if (slot.id === id) {
                console.log(`updating slot ${id} with ${imageSource}`)
                return {...slot, image:imageSource}
            }
            // console.log(slot)
            return slot
        })
        
    }
    
    const curSlot = useRef(null)

    function handleClick(slotId) {
        const slotIndex = () => {
            for (const slot of boardData.current) {
            const { id } = slot
            if (id === slotId) {
                return boardData.current.indexOf(slot)
            }
        }}
        // console.log(`clicked slot: ${slotId} in index: ${slotIndex()}`)

        const active = boardData.current[slotIndex()]
        if (active.image) {
            console.log(active.image)
            setActiveSlot(active.id)
            curSlot.current = active
        } else if (curSlot.current && !active.image){
            console.log(curSlot.current)
            updateBoard(active.id, curSlot.current.image)
            updateBoard(curSlot.current.id, "")
            setBoardDisplay(createBoard)
            curSlot.current = null
        }
    }



    return (
        <StyledBoard>
            {boardDisplay}
        </StyledBoard>
    )
}


