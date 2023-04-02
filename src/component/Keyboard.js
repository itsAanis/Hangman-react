import React from 'react'
import styles from  "../Keyboard.module.css"


function Keyboard({letterGuessed, handleClick, disabled}) {
    
    const alphabets = ["A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"];

        


  return (
    <div className = {styles.Keyboard} onClick ={handleClick}>
     { alphabets.map((alphabet,index) => 
            <button className ={`${styles.btn} ${letterGuessed.includes(alphabet) ? styles.inactive : ''}`} 
          
            disabled = {disabled}
            key={index} > 
            
            {alphabet}
            
            
            </button> 
          
     )}
          
      
            

    </div>
  )



}

export default Keyboard