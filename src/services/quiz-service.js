const QUIZZES_URL = process.env.REACT_APP_QUIZ_URL;
const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}
const findQuizById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())
}

const submitQuiz = (quizId, questions) => {
    console.log(JSON.stringify(questions))
    return fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}


const getQuizAttempts = (quizId) =>
    fetch(`${QUIZZES_URL}/${quizId}/attempts`)
        .then(response => response.json())


export default {
    findAllQuizzes, findQuizById, submitQuiz, getQuizAttempts
}
