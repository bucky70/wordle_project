import React,{useContext} from "react";
import { Appcontext } from "../App";

function Key({keyVal,bigKey}){
    const {board,setBoard,currAttempt,setCurrAttempt}= useContext(Appcontext);
    const selectLetter=()=>{
        
        if(keyVal==="ENTER"){
            if(currAttempt.letterPos!==5) return;
            setCurrAttempt({attempt:currAttempt.attempt+1,letterPos:0})
        }
        else if(keyVal==="DELETE"){
            if(currAttempt.letterPos===0) return;
            setCurrAttempt({...currAttempt,letterPos:currAttempt.letterPos-1})
            const newBoard = [...board]
            newBoard[currAttempt.attempt][currAttempt.letterPos]= ""
            setBoard(newBoard)
        }
        else{
            if(currAttempt.letterPos>4) return;
            const newBoard = [...board]
            newBoard[currAttempt.attempt][currAttempt.letterPos]= keyVal
            setBoard(newBoard)
            setCurrAttempt({...currAttempt,letterPos:currAttempt.letterPos+1})
        }
        
    }
return <div className="key" id={bigKey && "big"} onClick={selectLetter}>{keyVal}</div>
}

export default Key;