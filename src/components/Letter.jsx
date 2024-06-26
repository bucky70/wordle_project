import React from "react";
import { useContext } from "react";
import { Appcontext } from "../App";


function Letter({letterpos,attempVal}){
    const {board}=useContext(Appcontext);
    const letter=board[attempVal][letterpos];
    return <div className="letter">{letter}</div>;
}

export default Letter;