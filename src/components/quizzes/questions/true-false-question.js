import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [guess, setGuess] = useState(null)
    const [answer, setAnswer] = useState(null)
    const [complete, setComplete] = useState(false)
    const checkAnswer = () => {
        setAnswer(guess === question.correct)
        setComplete(true)
    }

    const correctStyle = i => {
        return correctAnswer(i,'list-group-item-success', 'list-group-item-danger')
    }

    const correctSign = i => {
        return correctAnswer(i,'fa-check green','fa-times red')
    }

    const correctAnswer = (i, right, wrong) => {
        if (question.correct === i && complete){
            return right
        }
        else if (question.correct !== i && !answer && answer !== null) {
            return wrong
        }
        return ''
    }

    return (
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
                <div className={`list-group-item ${correctStyle('true')}`} >
                    <div className='row justify-content-between'>
                        <label>
                            <input
                                type="radio"
                                onClick={() => setGuess("true")}
                                disabled={complete}
                                name={question._id}/>
                            True
                        </label>
                        <i className={`fas ${correctSign('true')}`} />
                    </div>
                </div>
                <div className={`list-group-item ${correctStyle('false')}`}>
                    <div className='row justify-content-between'>
                        <label>
                            <input
                                type="radio"
                                onClick={() => setGuess("false")}
                                disabled={complete}
                                name={question._id}/>
                            False
                        </label>
                        <i className={`fas ${correctSign('false')}`} />
                    </div>
                </div>
            </div>
            <p>
                {`Your Answer: ${guess === null ? '' : guess}`}
            </p>
            <button type="button" className="btn btn-success" onClick={() => checkAnswer()}>Grade</button>
        </div>
    )
}

export default TrueFalseQuestion;