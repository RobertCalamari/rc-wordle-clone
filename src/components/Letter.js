import React from "react";

function Letter({letter, setCurrentletter, usedLetters}){

    let classInfo = 'keyboard-letter noselect';

    if(letter === '1'){
        letter = 'Enter';
        classInfo += ' smaller-font';
    }else if(letter === '0'){
        letter = 'Delete';
        classInfo += ' smaller-font';
    }else{

    }

    for(let i in usedLetters){
        if(usedLetters[i] === letter){
            classInfo += ' letter-used';
        }
    }

    return(
        <div className={classInfo} onClick={()=>setCurrentletter(letter.toUpperCase())}>
           {letter}
        </div>
    );
}



export default Letter;