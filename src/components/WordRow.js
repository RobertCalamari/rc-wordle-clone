import React from "react";
import WordRowBox from "./WordRowBox";

function WordRow({word, rowkey, wordMax, colorList, wiggleOn, currentRow}){
    let tempWord = word;
    if(word.length <= wordMax){
        for(let i = 0; i < (wordMax - word.length); i++){
            tempWord+=' ';
        }
    }
    let colorkey = [];
    for(var row in colorList){
        if(parseInt(row) === rowkey){
            colorkey = colorList[row];
        }
    }
    let isWiggle = '';
    if(currentRow === rowkey && wiggleOn === true){
        isWiggle = 'wiggle';
    }

    return(
        <div className={"guesses-row " + isWiggle}>
            { [...tempWord].map((letter, i) => { 
                return <WordRowBox key={rowkey + ' - ' + i} color={colorkey[i]}  letter={letter} />; 
            }) }
        </div>
    );
}



export default WordRow;