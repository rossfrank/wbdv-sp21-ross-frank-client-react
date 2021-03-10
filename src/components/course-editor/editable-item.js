import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to="/somewhere/to/go",
        deleteItem,
        updateItem,
        item={title: "Some Title", _id:"ABC"},
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)
    const deleting = (item) => {
         deleteItem(item);
         setEditing(false)
    }
    return (
        <div>
            {
                !editing &&
                <div className="">
                    <Link className={`nav-link ${active?'active white':''}`} to={to}>
                        {item.title}
                    </Link>
                    <i onClick={() => setEditing(true)} className="fas fa-edit float-right"/>
                </div>
            }
            {
                editing &&
                <div>
                    <input
                        onChange={(e) =>
                            setCachedItem({
                                ...cachedItem,
                                title: e.target.value
                            })}
                        value={cachedItem.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                    }} className="fas fa-check"/>
                    <i onClick={() => deleting(item)} className="fas fa-times"/>
                </div>
            }
        </div>
    )
}

export default EditableItem
