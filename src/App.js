import { useEffect, useState } from 'react';
import Header from './component/Header';

import Keyboard from './component/Keyboard';
import './app.css';


const styleLetters = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: '.50em',
  fontSize: '30px',
  fontWeight: 'bold',
  fontFamily: 'monospace',
  marginBottom: '1em',
}





function App() {

  const [letterGuessed, setLetterGuessed] = useState([])
  const [wrongGuess, setWrongGuess] = useState([])
  

  let stringWord = 'HANGMAN'
  let word =  stringWord.split('')
  
let letter = ''

useEffect (() => {
  
   
}, [letterGuessed])

const handleClick = e => {
  letter = e.target.textContent
  if (!letterGuessed.includes(letter) ) {
  setLetterGuessed([...letterGuessed, letter]) }


  if(!word.includes(letter) && !wrongGuess.includes(letter)) {
    setWrongGuess([...wrongGuess, letter])
  }

 }
   
    const loser = wrongGuess.length >= 6 
    const winner = word.every(letter => letterGuessed.includes(letter))
  

return (
  <div>
    <Header />
    
  <div style={styleLetters}>
  {word.map((e , i)  => (
        <span style={{ borderBottom: ".2em solid black" }} key={i}>
        <span style = {{visibility: letterGuessed.includes(e) ? "visible" : "hidden"}} >
    {e}
    </span>
    </span>   
     ))}
     </div>
     <div>
     <span style={{ display:'block', marginBottom:'1em' , fontSize: '20px', fontFamily: 'monospace',}}>
     number of wrong guesses:     {wrongGuess.length}/6
      
    </span> 
    </div>   
    <Keyboard disabled = {winner || loser} handleClick={handleClick} letterGuessed = {letterGuessed}/>
   
    <div style={{ fontSize: "20px", textAlign: "center", marginTop:'2em' }}>
        {winner && "You won! - Refresh to try again"}
        {loser && "You lost! - Refresh to try again"}
      </div>

    </div>
   
  );
}

export default App;
