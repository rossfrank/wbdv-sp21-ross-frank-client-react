import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";

class CourseManager extends React.Component {
  state = {
      courses: [],
      newTitle: "Test Course",
  }

  updateCourse = (course) => {
    console.log(course)
    courseService.updateCourse(course._id, course)
        .then(status => this.setState((prevState) => ({
          ...prevState,
          courses: prevState.courses.map(
              (c) => c._id === course._id ? course : c)
        })))
  }

  changeTitle = (title) => {
      this.setState({newTitle : title.target.value})
      console.log(title.target.value)
      console.log(this.state)
  }

  componentDidMount = () =>
    findAllCourses()
        .then(courses => this.setState({courses}))

  addCourse = () => {
    const newCourse = {
      title: this.state.newTitle,
      owner: "Me",
      lastModified: "2/21/2021"
    }
    courseService.createCourse(newCourse)
        .then(course => this.setState(
            (prevState) => ({
              ...prevState,
              courses: [
                  ...prevState.courses,
                  course
              ]
            })))
  }

  deleteCourse = (courseToDelete) => {
    courseService.deleteCourse(courseToDelete._id)
        .then(status => {
          this.setState((prevState) => ({
              ...prevState,
              courses: prevState.courses.filter
                (course => course !== courseToDelete)
          }))
        })
  }

  render() {
    return(
      <div>
          <div className="container p-0 m-0">
              <div className="row">
                  <div className="col-sm-auto">
                      <i className="fas fa fa-2x fa-bars"/>
                  </div>
                  <div className="d-none d-lg-table-cell">
                      <h3>Course Manager</h3>
                  </div>
                  <div className="col">
                      <input className="form-control" placeholder="New Course Title" onChange={this.changeTitle}/>
                  </div>
                  <div className="col-sm-auto row text-right">
                      <div className="rounded-circle red-circle" align="center" onClick={this.addCourse}><i
                          className="fa fa-plus fa-2x align-middle text-center"/>
                      </div>
                      <Link to="/">
                          <i className="fas fa-2x fa-home"/>
                      </Link>
                  </div>
              </div>
          </div>
        <Route path="/courses/table">
          <CourseTable
              updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}/>
        </Route>
        <Route path="/courses/grid">
          <CourseGrid
              deleteCourse={this.deleteCourse}
              updateCourse={this.updateCourse}
              courses={this.state.courses}/>
        </Route>
          <Route path={[
              "/courses/editor/:courseId",
              "/courses/editor/:courseId/:moduleId",
              "/courses/editor/:courseId/:moduleId/:lessonId"]}
                 exact={true}
                 render={(props) => <CourseEditor {...props}/>}>
          </Route>
          <div className="container d-flex flex-row-reverse fixed-bottom padding-down-5px" onClick={this.addCourse}>
              <div className="rounded-circle red-circle" align="center"><i className="fa fa-plus fa-2x"/></div>
          </div>
      </div>
    )
  }
}

export default CourseManager
