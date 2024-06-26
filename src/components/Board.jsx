import React,{useState} from "react";
import Letter from "./Letter";
//import { boardDefault } from '../Words';
function Board(){
   // const[board, setBoard] = useState(boardDefault);
    return <div className="board">
        <div className="row">
            <Letter letterpos={0} attempVal={0}></Letter>
            <Letter letterpos={1} attempVal={0}></Letter>
            <Letter letterpos={2} attempVal={0}></Letter>
            <Letter letterpos={3} attempVal={0}></Letter>
            <Letter letterpos={4} attempVal={0}></Letter>
        </div>
        <div className="row">
            <Letter letterpos={0} attempVal={1}></Letter>
            <Letter letterpos={1} attempVal={1}></Letter>
            <Letter letterpos={2} attempVal={1}></Letter>
            <Letter letterpos={3} attempVal={1}></Letter>
            <Letter letterpos={4} attempVal={1}></Letter>
        </div>
        <div className="row">
            <Letter letterpos={0} attempVal={2}></Letter>
            <Letter letterpos={1} attempVal={2}></Letter>
            <Letter letterpos={2} attempVal={2}></Letter>
            <Letter letterpos={3} attempVal={2}></Letter>
            <Letter letterpos={4} attempVal={2}></Letter>
        </div>
        <div className="row">
            <Letter letterpos={0} attempVal={3}></Letter>
            <Letter letterpos={1} attempVal={3}></Letter>
            <Letter letterpos={2} attempVal={3}></Letter>
            <Letter letterpos={3} attempVal={3}></Letter>
            <Letter letterpos={4} attempVal={3}></Letter>
        </div>
        <div className="row">
            <Letter letterpos={0} attempVal={4}></Letter>
            <Letter letterpos={1} attempVal={4}></Letter>
            <Letter letterpos={2} attempVal={4}></Letter>
            <Letter letterpos={3} attempVal={4}></Letter>
            <Letter letterpos={4} attempVal={4}></Letter>
        </div>
        <div className="row">
            <Letter letterpos={0} attempVal={5}></Letter>
            <Letter letterpos={1} attempVal={5}></Letter>
            <Letter letterpos={2} attempVal={5}></Letter>
            <Letter letterpos={3} attempVal={5}></Letter>
            <Letter letterpos={4} attempVal={5}></Letter>
        </div>
        </div>;
}

export default Board;