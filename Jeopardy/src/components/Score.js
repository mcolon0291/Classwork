import React, { useState } from 'react';

export default function Score ({question}){

    let quest = question[0]

    let[score, setScore] = useState(0)

    const increaseScore = (e) => {
        setScore(score + quest.value)
        e.preventDefault()
    }
    const decreaseScore = (e) => {
        setScore(score - quest.value)
        e.preventDefault()
    }

    const resetScore = (e) => {
        setScore(score - score)
        e.preventDefault()
    }

    return(
        <div> 
            <h1 className='score'>Score: {score}</h1>
            <form>
                <button className= 'decrease' onClick ={decreaseScore}> Decrease</button>
                <button className= 'increase' onClick={increaseScore}>Increase</button>
                <button onClick={resetScore}>Reset</button>
            </form>
        </div>
    )
}