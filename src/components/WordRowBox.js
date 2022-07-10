import React from "react";

function WordRowBox({letter, color}){
    let addcolor= {};
    if(color === 'g'){
        addcolor = {background: '#1c7933', border: '#1c7933 2px solid' };
    } else if(color === 'y'){
        addcolor = {background: '#c6963a', border: '#c6963a 2px solid' };
    } else if(color === '-'){
        addcolor = {background: '#3c3c3c', border: '#3c3c3c 2px solid' };
    }

    return(
        <div className="row-letter noselect" style={addcolor}>
           {letter}
        </div>
    );
}



export default WordRowBox;