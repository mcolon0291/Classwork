export default function Info ({question}){

    let quest = question[0]

    const loaded = () => {

        return(
            <div>
                <h2>Category: {quest.catergory.title}</h2>
                <h2>Points: {quest.value}</h2>
                <h2>Question: {quest.question}</h2>
            </div>
        )
    }

    const loading = () => {
        return <div>
            <h2> Category:</h2>
            <h2> Points:</h2>
            <h2>Answer:</h2>
        </div>
    }

    return question ? loaded() : loading()
}