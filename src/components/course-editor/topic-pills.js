import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import topicService, {findTopicsForLesson} from '../../services/topic-service'


const TopicPills = (
    {
        myTopics=[{_id: "1", title: "Default Topic"}],
        findTopicsForLesson,
        createTopic,
        deleteTopic,
        updateTopic
    }) => {
    const {courseId, moduleId, lessonId, topicId, layout} = useParams();
    useEffect(() => {
        if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])
    return(
        <div>
            <ul className="nav nav-pills">
                {
                    myTopics.map(topic =>
                        <li className="nav-item">
                            <EditableItem
                                active={topic._id === topicId}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                item={topic}
                                updateItem={updateTopic}
                                deleteItem={deleteTopic}
                            />
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createTopic(lessonId)} className="fas fa-plus"/>
                </li>
            </ul>
        </div>)}

const stpm = (state) => {
    return {
        myTopics: state.topicReducer.topics
    }
}
const dtpm = (dispatch) => {
    return {
        createTopic: (lessonId) => {
            topicService.createTopic(lessonId, {title: "New Topic"})
                .then(theActualTopic => dispatch({
                    type: "CREATE_TOPIC",
                    topic: theActualTopic
                }))
        },
        deleteTopic: (item) =>
            topicService.deleteTopic(item._id)
                .then(() => dispatch({
                    type: "DELETE_TOPIC",
                    topicToDelete: item
                })),
        updateTopic: (topic) =>
            topicService.updateTopic(topic._id, topic)
                .then(() => dispatch({
                    type: "UPDATE_TOPIC",
                    topic
                })),
        findTopicsForLesson: (lessonId) => {
            topicService.findTopicsForLesson(lessonId)
                .then(theTopics => dispatch({
                    type: "FIND_TOPICS_FOR_LESSON",
                    topics: theTopics
                }))
        }
    }
}

export default connect(stpm, dtpm)(TopicPills)
