import { useState } from 'react';

export default function Reveal ({ question }) {

    let quest = question[0]

    const [reveal, setReveal] = useState(false)
    const [buttonText, setButtonText] = useState ('Click for Answer')
    const revealAnswer = () => {
    setReveal(reveal => !reveal)

        setButtonText((state) => (state === 'Click to Hide Answer' ? 'Click for Answer' : 'Click to Hide Answer'))
    }

    const loaded = () => {
        return (
            <div>
                <button onClick= { revealAnswer}> {buttonText}</button>
                {reveal && (
                    <div> 
                        <h3>Answer: {quest.answer}</h3>
                        </div>
                )}
            </div>
        );
    }

    const loading = () => {
        <div>

        </div>
    }
return question ? loaded() : loading()
}