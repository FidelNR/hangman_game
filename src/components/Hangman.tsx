import { useState,useEffect } from "react";
import "../css/style.css";
import Welcome from "./Welcome";

interface HangmanProps{
    words_props:string[];
    errorCount:number;
    setErrorCount:(count: number) => void;
}



const Hangman = ({words_props,errorCount,setErrorCount}:HangmanProps)=>{

    const [gameStarted, setGameStarted] = useState(false);

    const startGame = () => {
        setGameStarted(true);
    };
    //RELOJ
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)

  useEffect(() => {
    if(gameStarted){
    const key = setInterval(() => {
      // Incrementar los segundos
      setSeconds(prevSeconds => prevSeconds + 1)

      // Si los segundos llegan a 60, reiniciarlos y aumentar los minutos
      if (seconds === 59) {
        setSeconds(0)
        setMinutes(prevMinutes => prevMinutes + 1)
      }
    }, 1000);

    return () => {
      clearInterval(key);
    };
    }
  }, [seconds,gameStarted]); // Dependencia de segundos 
    //************************

    const [selectedWord, setSelectedWord]= useState(words_props[0]);
    const [guessedLetters, setGuessedLetters]= useState<string[]>([]);
    

    const displayWord= selectedWord.split('').map((letter,index) =>{
        console.log("selectedWord: ", selectedWord)
        if (guessedLetters.includes(letter)){
            console.log("guessedLetters",guessedLetters)
            return letter;
        }
        else{
            return '_';
        }
    });
    
    const handleGuess = (letter: string) => {
        if (!guessedLetters.includes(letter)){
            setGuessedLetters([...guessedLetters,letter]);
            if (!selectedWord.includes(letter)){
                setErrorCount(errorCount + 1);
                console.log("setErrorCount: ", setErrorCount)
            }
        }    
    };

    const restartGame = () =>{
        const newWordIndex = Math.floor(Math.random() * words_props.length);
        const newWord = words_props[newWordIndex];
        setSelectedWord(newWord);
        setGuessedLetters([]); //Reiniciar las letras adivinadas
        setErrorCount(0);
    };

    return (
        <div className="father">
            {!gameStarted ? (
                <button className="button_start" onClick={startGame}>Comenzar</button>
            ) : (
                <div className="contenido">
                    <p>
                        {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds} have passed!!
                    </p>
                    {
                        <div>
                        <><p>{displayWord.join(' ')}</p><input maxLength={1} onChange={(e) => handleGuess(e.target.value)} /></>
                        {
                        (displayWord.join('') === selectedWord || errorCount >7) &&
                         (
                            <button onClick={() =>{
                                restartGame();
                                setSelectedWord(words_props[Math.floor(Math.random()*words_props.length)]);
                            }}>Select New Word</button>
                        )
                        }
                        <p>Cantidad de errores {errorCount}</p>
                        {displayWord.join('')===selectedWord &&(
                            <p>You won in this round</p>
                        )}
                        </div>
                    
                    }
                </div>
            )}
   
        </div>
    )
    };

export default Hangman;