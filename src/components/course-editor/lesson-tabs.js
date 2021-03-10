import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../services/lesson-service'


const LessonTabs = (
    {
        myLessons=[{_id: "1", title: "Default Lesson"}],
        findLessonsForModule,
        createLesson,
        updateLesson,
        deleteLesson
    }) => {
    const {courseId, moduleId, lessonId, layout} = useParams();
    useEffect(() => {
        console.log("LOAD LESSONS FOR MODULE: " + moduleId)
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])
    return(
        <div>
            <ul className="nav nav-pills">
                {
                    myLessons.map(lesson =>
                        <li className="nav-item">
                            <EditableItem
                                active={lesson._id === lessonId}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                item={lesson}
                                updateItem={updateLesson}
                                deleteItem={deleteLesson}
                            />
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createLesson(moduleId)} className="fas fa-plus"/>
                </li>
            </ul>
        </div>)}

const stpm = (state) => {
    return {
        myLessons: state.lessonReducer.lessons
    }
}
const dtpm = (dispatch) => {
    return {
        createLesson: (moduleId) => {
            console.log(moduleId)
            lessonService.createLesson(moduleId, {title: "New Lesson"})
                .then(theActualLesson => dispatch({
                    type: "CREATE_LESSON",
                    lesson: theActualLesson
                }))
        },
        deleteLesson: (item) =>
            lessonService.deleteLesson(item._id)
                .then(() => dispatch({
                    type: "DELETE_LESSON",
                    lessonToDelete: item
                })),
        updateLesson: (lesson) =>
            lessonService.updateLesson(lesson._id, lesson)
                .then(() => dispatch({
                    type: "UPDATE_LESSON",
                    lesson
                })),
        findLessonsForModule: (moduleId) => {
            lessonService.findLessonsForModule(moduleId)
                .then(theLessons => dispatch({
                    type: "FIND_LESSONS_FOR_MODULE",
                    lessons: theLessons
                }))
        }
    }
}

export default connect(stpm, dtpm)(LessonTabs)
