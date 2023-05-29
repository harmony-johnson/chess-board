import styled from "styled-components";

export const StyledSlot = styled.div`
    background-color: ${props => props.light ? props.theme.light : props.theme.alt};
    color: ${props => props.light ? "black" : "white"};
    cursor: ${props => props.children ? "pointer" : "default"};
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        border: ${props => props.image ? `5px solid ${props.theme.border}` : "none"};
    }

    &.active {
        border: ${props => `5px solid ${props.theme.border}`} ;
        background-color: lightblue;
    }
`
export const LabelCol = styled.div`
    background-color: ${props => props.theme.border};
    width: 12.5%;
    height: 20px;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
`
export const LabelRow = styled.div`
    background-color: ${props => props.theme.border};
    width: 20px;
    height: 12.05%;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
`
export const StyledBoard = styled.div`
    display: grid;
    grid-template-columns: repeat(8,1fr);
    grid-template-rows: repeat(8,1fr);
    height: 100vh;
    /* min-width: 600px; */
    width: 600px;
    /* max-width: 100%; */
    border: ${props => `10px solid ${props.theme.border}`};
    margin: 0 auto;
`
