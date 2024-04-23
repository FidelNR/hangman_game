import { useState, useTransition } from "react";
 import "../css/style.css";

interface HangmanProps{
    words_props:string[];
}



const Hangman = ({words_props}:HangmanProps)=>{

    const [gameStarted, setGameStarted] = useState(false);

    const startGame = () => {
        setGameStarted(true);
    };

    const [selectedWord, setSelectedWord]= useState(words_props[0]);
    const [guessedLetters, setGuessedLetters]= useState<string[]>([]);
    const [errorCount, setErrorCount]= useState(0);

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
                setErrorCount((prev)=> prev + 1);
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
                    {
                        <div>
                        <><p>{displayWord.join(' ')}</p><input maxLength={1} onChange={(e) => handleGuess(e.target.value)} /></>
                        {
                        (displayWord.join('') === selectedWord || errorCount >5) &&
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