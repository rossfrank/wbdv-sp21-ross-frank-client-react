import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question"
import questionService from "../../services/question-service"
import quizService from "../../services/quiz-service"

const Quiz = () => {
    const {quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    const [attempts, setAttempts] = useState([])
    const [answers, setAnswers] = useState([])
    const [score, setScore] = useState(null)

    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId)
            .then(questions => setQuestions(questions))
        quizService.getQuizAttempts(quizId)
            .then((attempt => setAttempts(attempt)))
    },[])

    const grade = (question, answer) => {
        question.answer = answer
        setAnswers([...answers, question])
        console.log(answer)
        console.log(answers)
    }

    return(
        <div>
            <h2>Quiz {quizId}</h2>
            <div>
                {attempts &&
                    attempts.map(a =>
                    <p>
                        Attempt {a._id} Score: {a.score}
                    </p>)
                }
            </div>
            <ul className="list-group">
                {
                    questions.map(question =>
                        <li key={question._id} className="list-group-item">
                            <Question question={question} grade={grade} />
                        </li>
                    )
                }
            </ul>
            <button type="button" className="btn btn-success"
                    onClick={() => quizService.submitQuiz(quizId, answers)
                        .then(x => {
                            console.log(x)
                            setScore(x)})}>
                Submit
            </button>
        </div>
    );
}

export default Quiz;