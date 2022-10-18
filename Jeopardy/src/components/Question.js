import { useState } from 'react';
import Info from './Info';
import Reveal from './Reveal';
import Score from './Score';

export default function Question () {


    let [question, setQuestion] = useState("")

    const getQuestion = async () => {
        const response = await fetch('http://jservice.io/api/random')
        const data = await response.json()
        setQuestion(data)
    }

    return(
        <div className="question">
            <Score question={question} />
            <h2 className ="play"> Let's Play</h2>

            <button onClick ={getQuestion}> Get Question</button>
            <Info question = {question} />
            <Reveal question = {question} />
        </div>
    )
}

