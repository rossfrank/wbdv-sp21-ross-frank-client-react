import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [guess, setGuess] = useState(null)
    const [answer, setAnswer] = useState(null)
    const [complete, setComplete] = useState(false)
    const checkAnswer = () => {
        setAnswer(guess === question.correct)
        setComplete(true)
    }

    const correctStyle = i => {
        return correctAnswer(i,'list-group-item-success', 'list-group-item-danger', i === guess)
    }

    const correctSign = i => {
        return correctAnswer(i,'fa-check green','fa-times red')
    }

    const correctAnswer = (i, right, wrong, guessed = true) => {
        if (question.correct === i && complete){
            return right
        }
        else if (question.correct !== i && !answer && answer !== null && guessed) {
            return wrong
        }
        return ''
    }

    return(
        <div>
            <h4>
                {question.question}
                {
                    answer &&
                    <i className={`fas fa-check green`} />
                }
                {
                    (!answer && answer !== null) &&
                    <i className="fas fa-times red" />
                }
            </h4>
            <div className="list-group">
            {
                question.choices.map((choice) => {
                    return(
                        <div key={choice} className={`list-group-item ${correctStyle(choice)}`} >
                            <div className='row justify-content-between'>
                                <label>
                                    <input
                                        type="radio"
                                        onClick={() => setGuess(choice)}
                                        disabled={complete}
                                        name={question._id}/>
                                    {choice}
                                </label>
                                <i className={`fas ${correctSign(choice)}`} />
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <p>
                {`Your Answer: ${guess === null ? '' : guess}`}
            </p>
            <button type="button" className="btn btn-success" onClick={() => checkAnswer()}>Grade</button>
        </div>
    )
}

export default MultipleChoiceQuestion;