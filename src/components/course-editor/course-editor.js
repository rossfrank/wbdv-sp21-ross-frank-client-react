import React from 'react'
import {useParams, Link} from "react-router-dom";
import moduleReducer from "../../reducers/modules-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import widgetReducer from "../../reducers/widget-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import WidgetList from "../widgets/widget-list";
const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {courseId, moduleId, layout} = useParams();
    return (
        <Provider store={store}>
            <div>
                <h2>
                    <Link to={`/courses/${layout}`}>
                            <i className="fas fa-arrow-left"/>
                    </Link>
                    Course Editor
                    <Link to={`/courses/${layout}`}>
                        <i className="fas fa-times float-right"/>
                    </Link>
                </h2>
                <div className="row">
                    <div className="col-4">
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                        <TopicPills/>
                        <WidgetList/>
                    </div>
                </div>
            </div>
        </Provider>)}

export default CourseEditor
