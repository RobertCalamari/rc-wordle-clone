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

    let addtoinfo = '';

    for(let i in usedLetters[0]){
        if(usedLetters[0][i] === letter){
            addtoinfo = ' cgrey';
        }
    }
    for(let i in usedLetters[1]){
        if(usedLetters[1][i] === letter){
            addtoinfo = ' cyellow';
        }
    }
    for(let i in usedLetters[2]){
        if(usedLetters[2][i] === letter){
            addtoinfo = ' cgreen';
        }
    }

    if(addtoinfo != ''){
        classInfo += addtoinfo;
    }

    return(
        <div className={classInfo} onClick={()=>setCurrentletter(letter.toUpperCase())}>
           {letter}
        </div>
    );
}



export default Letter;