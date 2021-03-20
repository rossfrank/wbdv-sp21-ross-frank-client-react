import React, {useEffect} from 'react'
import {useParams} from "react-router-dom"
import widgetService from "../../services/widget-service";
import {connect} from "react-redux";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";

const WidgetList = (
    {
        myWidgets=[],
        findWidgetsForTopic,
        createWidget,
        deleteWidget,
        updateWidget
    }
) => {
    const {topicId} = useParams()
    //const topicId = "604844d9104b980017201a5e"

    useEffect(() => {
        if(topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)
        }
    }, [topicId])
    return(
        <div>
            <i onClick={()=>createWidget(topicId)} className="fas fa-plus float-right fa-2x"/>
            <h1>Widget List {topicId}</h1>
            <ul className="list-group">
                {
                    myWidgets.map(widget =>
                        <li key={widget.id} className="list-group-item">

                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                    widget={widget}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                    widget={widget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
const stpm = (state) => {
    return {
        myWidgets: state.widgetReducer.widgets
    }
}
const dtpm = (dispatch) => {
    return {
        createWidget: (topicId) => {
            widgetService.createWidget(topicId, {type: "HEADING", size: 1, text: "New Widget"})
                .then(theActualWidget => dispatch({
                    type: "CREATE_WIDGET",
                    widget: theActualWidget
                }))
        },
        deleteWidget: (item) =>
            widgetService.deleteWidget(item.id)
                .then(() => dispatch({
                    type: "DELETE_WIDGET",
                    widgetToDelete: item
                })),
        updateWidget: (widget) =>
            widgetService.updateWidget(widget.id, widget)
                .then(() => dispatch({
                    type: "UPDATE_WIDGET",
                    widget
                })),
        findWidgetsForTopic: (topicId) => {
            widgetService.findWidgetsForTopic(topicId)
                .then(theWidgets => dispatch({
                    type: "FIND_WIDGETS_FOR_TOPIC",
                    widgets: theWidgets
                }))
        }
    }
}

export default connect(stpm, dtpm)(WidgetList)