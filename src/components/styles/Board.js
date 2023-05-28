import styled from "styled-components";

export const StyledSlot = styled.div`
    background-color: ${props => props.light ? props.theme.light : props.theme.alt};
    background-image: ${props => props.image ? props.image : ""};
    color: ${props => props.light ? "black" : "white"};
    cursor: ${props => props.children ? "pointer" : "default"};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 12.1%;
    width: 12.05%;

    &:hover,
    &:focus {
        border: ${
            (props) => {
                if (props.children) {
                    return `5px solid ${props.theme.border}`
                }
            }};
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
    display: flex;
    flex-flow: row wrap;
    height: 100vh;
    width: 600px;
    /* max-width: 900px; */
    border: ${props => `10px solid ${props.theme.border}`};
    margin: 0 auto;
    /* align-items: center; */
`
