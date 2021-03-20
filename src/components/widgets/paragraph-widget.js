import React , {useState} from 'react'

const ParagraphWidget = ({widget, updateWidget, deleteWidget}) => {
    const [cachedItem, setCachedItem] = useState(widget)
    const [editing, setEditing] = useState(false)
    return (
        <div>
            {
                editing &&
                    <div>
                        <div>
                            <i onClick={() => deleteWidget(widget)} className="fas fa-trash float-right"/>
                            <i onClick={() => {
                                window.location.reload(false);
                                setEditing(false)
                                updateWidget(cachedItem)
                            }} className="fas fa-check float-right"/>
                        </div>
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
                        <textarea
                            onChange={(e) => setCachedItem({...cachedItem, text: e.target.value})}
                            value={cachedItem.text}
                            className="form-control"/>
                    </div>
            }
            {
                !editing &&
                    <div>
                        <i onClick={() => setEditing(true)} className="fas fa-cog float-right"/>
                        <p>
                            {cachedItem.text}
                        </p>
                    </div>
            }
        </div>
    )
}

export default ParagraphWidget