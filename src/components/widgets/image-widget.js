import React, {useState} from 'react'

const ImageWidget = ({widget, updateWidget, deleteWidget}) => {
    const [cachedItem, setCachedItem] = useState(widget)
    const [editing, setEditing] = useState(false)
    return (
        <div>
            <h2>Image Widget</h2>
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
            <img src={widget.url} width={widget.width} height={widget.height}/>
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
                    URL
                    <input onChange={(e) => setCachedItem(cachedItem => ({...cachedItem, url: e.target.value}))}
                        value={cachedItem.url} className="form-control"/>
                    width
                    <input onChange={(e) => setCachedItem(cachedItem => ({...cachedItem, width: e.target.value}))}
                        value={cachedItem.width} className="form-control"/>
                    height
                    <input onChange={(e) => setCachedItem(cachedItem => ({...cachedItem, height: e.target.value}))}
                        value={cachedItem.height} className="form-control"/>
                </div>
            }
        </div>
    )
}

export default ImageWidget