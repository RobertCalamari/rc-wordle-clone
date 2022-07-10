import React from "react";
import Letter from "./Letter";

function Row({letters, setCurrentletter, usedLetters}){

    return(
        <div className="keyboard-row">
           { [...letters].map((letter) => { return <Letter key={letter} usedLetters={usedLetters} letter={letter} setCurrentletter={setCurrentletter} />; }) }
        </div>
    );
}



export default Row;