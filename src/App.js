import './App.css';
import { useEffect, useState } from 'react';
import WordRow from './components/WordRow';
import ClickKeyboard from './components/ClickKeyboard';

// const API_URL = 'https://api.frontendexpert.io/api/fe/wordle-words';
const API_URL = 'js/totalwords.json';
const guessesMax = 5;
const wordMax = 5;
let toDisplay = {display: 'block'};



function App() {

  const [solution, setSolution] = useState('');
  const [guessList, setGuessList] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [allWords, setAllWords] = useState([]);
  const [currentLetter, setCurrentletter] = useState('');
  const [currentWord, setCurrentWord] = useState('');
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [currentRow, setCurrentRow] = useState(0);
  const [wiggleOn, setWiggleOn] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [finalMessage, setFinalMessage] = useState('New Word');
  const [score, setScore] = useState(0);
  const [usedLetters, setUsedLetters] = useState([]);

  useEffect(() => {
    fetchWord();
  }, []);

  const fetchWord = async () => {
    const response = await fetch(API_URL);
    const words = await response.json();
    setAllWords(words);
    const randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    setSolution(randomWord);
    setGuessList(['','','','','','']);
    setColorList(['','','','','','']);
  };

  function newWord(){
    const randomWord = allWords[Math.floor(Math.random() * allWords.length)].toUpperCase();
    setSolution(randomWord);
    setGuessList(['','','','','','']);
    setColorList(['','','','','','']);
    setCurrentletter('');
    setUsedLetters([]);
    setCurrentWord('');
    setCurrentRow(0);
    setIsGameOver(false);
  }

  useEffect(() => {
    if(currentLetter === ''){

    }else if(currentLetter === 'ENTER'){
      if(guessesMax <= currentRow){
        setIsGameOver(true);
        if(currentRow != 10){
          setFinalMessage(solution + ' - New Word');
        }
      }
      if(currentWord.length === 5){
        if(allWords.includes(currentWord.toLowerCase())){
          let counter = solution;
          let colorarr = ['-','-','-','-','-'];
          let greenarr = [];
          let yellowarr = [];
          let grayarr = [];

          grayarr = [];
          for(let i in usedLetters[0]){
            grayarr[grayarr.length] = usedLetters[0][i];
          }
          for(let i in usedLetters[1]){
            yellowarr[yellowarr.length] = usedLetters[1][i];
          }
          for(let i in usedLetters[2]){
            greenarr[greenarr.length] = usedLetters[2][i];
          }

          for(let i in currentWord){
            if(grayarr.includes(currentWord[i])){
            }else{
              grayarr.push(currentWord[i]);
            }
          }
  
          for(let letter in currentWord){
            if(currentWord[letter] === counter[letter]){
              colorarr[letter] = 'g';
              if(greenarr.includes(currentWord[letter])){
              }else{
                greenarr.push(currentWord[letter]);
              }
              counter = [...counter];
              counter[letter] = '-';
              counter = counter.join('');
            }
          }
  
          for(let letter in currentWord){
            let counterindex = counter.indexOf(currentWord[letter]);
            if(counterindex === -1){
              
            }else{
              if(colorarr[letter] === 'g'){
  
              }else{
                colorarr[letter] = 'y';
                if(yellowarr.includes(currentWord[letter])){
                }else{
                  yellowarr.push(currentWord[letter]);
                }
                counter = [...counter];
                counter[counterindex] = '-';
                counter = counter.join('');
              }
            }
          }
        
          let temparr = [];
          for(let i in colorList){
            if(currentRow === parseInt(i)){
              temparr[i] = colorarr;
            }else{
              temparr[i] = colorList[i];
            }
          }
          setColorList(temparr);
  
          setCurrentRow(currentRow+1);

          console.log(grayarr,yellowarr,greenarr);

          setUsedLetters([grayarr,yellowarr,greenarr]);
          setCurrentletter('');
          setCurrentWord('');

          if(currentWord === solution){
            console.log('You win!');
            setScore(score+1);
            setIsGameOver(true);
            setCurrentRow(10);
            setFinalMessage('You Win! New Word');
          }

        }else{
          setIsDisplayed(true);
          setWiggleOn(true);
          
        }
      }else{
      }

    }else if(currentLetter === 'DELETE'){
      setCurrentWord(currentWord.slice(0,-1));
      setCurrentletter('');
    }else{
      if(currentWord.length < wordMax){
          setCurrentWord(currentWord + currentLetter);
      }
      setCurrentletter('');
    }
  }, [currentLetter]);

  useEffect(() => {
    if(guessList.length === 0){
      setGuessList(['','','','','','']);

    }else{
      let temparr = [];
      for(let i in guessList){
        if(currentRow === parseInt(i)){
          temparr[i] = currentWord;
        }else{
          temparr[i] = guessList[i];
        }
      }
      setGuessList(temparr);
    }
    
    
  }, [currentWord]);

  useEffect(() => {
    if(isDisplayed === true){
      setTimeout(() => {
        setIsDisplayed(false);
        setWiggleOn(false);
      }, 3001);

    }else{

    }
    
  }, [isDisplayed])


  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      Score: {score}
      <br />
      <br />
      <div className='guesses-container'>
        { 
          [...guessList].map((word, i) => { 
              return <WordRow key={i}  word={word} currentRow={currentRow} colorList={colorList} wiggleOn={wiggleOn} wordMax={wordMax} rowkey={i} />; 
            })           
        }
      </div>
      <br />
      <br />
      <div className='keyboard-container'>
        <ClickKeyboard usedLetters={usedLetters} setCurrentletter={setCurrentletter}/>
      </div>
      <div className='no-word-popup' style={isDisplayed === false ? {display:'none'} : {display:'flex'}}>
        Not in Word List!
      </div>
      <br />

      <div className='new-game-button noselect' style={isGameOver === false ? {display:'none'} : {display:'flex'}} onClick={()=>newWord()}>
        {finalMessage}
      </div>
      
    </div>
  );
}

export default App;
