import React , {useState} from 'react'

const HeadingWidget = ({widget, updateWidget, deleteWidget}) => {
    const [cachedItem, setCachedItem] = useState(widget)
    const [editing, setEditing] = useState(false)
    return(
        <div>
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
                        window.location.reload(false);
                    }} className="fas fa-check float-right"/>
                </div>
            }
            <div>
                {cachedItem.size === 1 && <h1>{widget.text}</h1>}
                {cachedItem.size === 2 && <h2>{widget.text}</h2>}
                {cachedItem.size === 3 && <h3>{widget.text}</h3>}
                {cachedItem.size === 4 && <h4>{widget.text}</h4>}
                {cachedItem.size === 5 && <h5>{widget.text}</h5>}
                {cachedItem.size === 6 && <h6>{widget.text}</h6>}
            </div>
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
                    <input onChange={(e) => setCachedItem(cachedItem => ({...cachedItem, text: e.target.value}))} value={cachedItem.text}
                           className="form-control"/>
                    <select onChange={(e) => setCachedItem(cachedItem => ({...cachedItem, size: parseInt(e.target.value)}))}
                            value={cachedItem.size} className="form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
                </div>
            }
        </div>
    )
}

export default HeadingWidget