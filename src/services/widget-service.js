const WIDGET_URL = process.env.REACT_APP_WIDGET_URL

export const createWidget = (tid, widget) =>
    fetch(`${WIDGET_URL}/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findWidgetsForTopic = (tid) =>
    fetch(`${WIDGET_URL}/topics/${tid}/widgets`)
        .then(response => response.json())

export const findAllWidgets = () =>
    fetch(`${WIDGET_URL}/widgets`)
        .then(response => response.json())

export const findWidgetById = (wid) =>
    fetch(`${WIDGET_URL}/widgets/${wid}`)
        .then(response => response.json())

export const updateWidget = (wid, widget) =>
    fetch(`${WIDGET_URL}/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteWidget= (wid) =>
    fetch(`${WIDGET_URL}/widgets/${wid}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export default {
    createWidget, findWidgetById, findWidgetsForTopic, findAllWidgets, updateWidget, deleteWidget
}