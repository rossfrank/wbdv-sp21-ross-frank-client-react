import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizService from "../../services/quiz-service";

const QuizzesList = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        quizService.findAllQuizzes()
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])
    return(
        <div>
            <h2>Quizzes</h2>
            <div className="list-group">
                {
                    quizzes.map((quiz) => {
                        return(
                            <div key={quiz._id} className="list-group-item">
                                <div className="row justify-content-between">
                                    <Link
                                        to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                        className="stretched-link">
                                        {quiz.title}
                                    </Link>
                                    <button type="button" className="btn btn-primary">Start</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuizzesList;