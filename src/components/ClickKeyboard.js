import React from "react";
import Row from "./Row";

function ClickKeyboard({setCurrentletter, usedLetters}){

    const layout = ['QWERTYUIOP','ASDFGHJKL','1ZXCVBNM0'];

    return(
        <>
            <Row letters={layout[0]} usedLetters={usedLetters} setCurrentletter={setCurrentletter} />
            <Row letters={layout[1]} usedLetters={usedLetters} setCurrentletter={setCurrentletter} />
            <Row letters={layout[2]} usedLetters={usedLetters} setCurrentletter={setCurrentletter} />
        </>
    );
}



export default ClickKeyboard;