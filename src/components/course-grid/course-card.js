import React, {useState} from 'react'
import {Link} from "react-router-dom";

 const CourseCard = ({
                         deleteCourse,
                         updateCourse,
                         course,
                         title,
                     }) => {
     const [editing, setEditing] = useState(false)
     const [newTitle, setNewTitle] = useState(title)

     const saveTitle = () => {
         setEditing(false)
         const newCourse = {
             ...course,
             title: newTitle
         }
         updateCourse(newCourse)
         console.log(course)
     }
     return <div className="col-xs-6 col-sm-5 col-md-4 col-lg-3 col-xl-2 mb-3">
         <div className="card">
             <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top"
                  alt="..."/>
             <div className="card-body">
                 {!editing && <h5 className="card-title">{course.title}</h5>}
                 {editing && <input
                     onChange={(event) => setNewTitle(event.target.value)}
                     value={newTitle}
                     className="form-control"/>}
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                     card's content.</p>
                 <img src={``}/>
                 <Link to={`/courses/grid/edit/${course._id}`} className="btn btn-primary">
                     {course.title}
                 </Link>
             </div>
             <div className="my-controls-at-top-right">
                 {editing && <i onClick={() => saveTitle()} className="fas fa-check green"/>}
                 {editing && <i onClick={() => deleteCourse(course)} className="fas fa-times red"/>}
             </div>
             <div className="my-controls-at-bottom-right">
                 {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"/>}
             </div>
         </div>
     </div>
 }

export default CourseCard
