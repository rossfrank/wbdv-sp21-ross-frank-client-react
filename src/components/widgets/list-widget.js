import React, {useState} from 'react'

const ListWidget = ({widget, updateWidget, deleteWidget}) => {
    const [cachedItem, setCachedItem] = useState(widget)
    const [editing, setEditing] = useState(false)
    return (
        <div>
            <h2>List Widget</h2>
            { !editing &&
            <div>
                <i onClick={() => setEditing(true)} className="fas fa-cog float-right"/>
            </div>
            }
            { editing &&
            <div>
                <i onClick={() => deleteWidget(widget)} className="fas fa-trash float-right"/>
                <i onClick={() => {
                    setEditing(false)
                    updateWidget(cachedItem)
                    window.location.reload(false)
                }} className="fas fa-check float-right"/>
            </div>
            }
            {
                !editing &&
                <div>
                    {
                        widget.ordered &&
                        <ol>
                            {
                                widget.text.split("\n").map(item => {
                                    return(
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !widget.ordered &&
                        <ul>
                            {
                                widget.text.split("\n").map(item => {
                                    return(
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    }
                </div>
            }
            {
                editing &&
                <div>
                    <select onChange={(e) => setCachedItem(cachedItem => ({...cachedItem, type: e.target.value}))}
                            value={cachedItem.type} className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"VIDEO"}>Video</option>
                        <option value={"IMAGE"}>Image</option>
                        <option value={"LINK"}>Link</option>
                        <option value={"LIST"}>List</option>
                        <option value={"HTML"}>HTML</option>
                    </select>
                    <input onChange={(e) => setCachedItem(cachedItem => ({...cachedItem, ordered: e.target.value}))}
                           value={cachedItem.ordered}
                        type="checkbox"/> Ordered
                    <br/>
                    List Items
                    <textarea onChange={(e) => setCachedItem(cachedItem => ({...cachedItem, text: e.target.value}))}
                        rows={10} value={cachedItem.text} className="form-control">
                    </textarea>
                </div>
            }
        </div>
    )
}

export default ListWidget