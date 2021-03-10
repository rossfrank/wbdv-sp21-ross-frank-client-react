const LESSON_URL = "https://wbdv-generic-server.herokuapp.com/api/001939185/lessons";
const TOPIC_URL = "https://wbdv-generic-server.herokuapp.com/api/001939185/topics";

export const createTopic = (lessonId, topic) =>
    fetch(`${LESSON_URL}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findTopicsForLesson = (lessonId) =>
    fetch(`${LESSON_URL}/${lessonId}/topics`)
        .then(response => response.json())

export const findTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}`)
        .then(response => response.json())

export const updateTopic = (topicId, topic) =>
    fetch(`${TOPIC_URL}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteTopic= (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export default {
    findTopicsForLesson, createTopic, findTopic, updateTopic, deleteTopic
}