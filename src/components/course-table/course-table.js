import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable
  extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return(
      <div>
        <table className="table">
            <thead>
            <tr>
                <th>
                    Title
                </th>
                <th className="d-none d-md-table-cell">
                    Owned by
                </th>
                <th className="d-none d-lg-table-cell">
                    Last modified
                </th>
                <th>
                    <Link to="/courses/grid">
                        <i className="fas fa-th float-right p-1"/>
                    </Link>
                    <i className="fa fa-sort-alpha-up-alt float-right p-1"/>
                    <i className="fas fa-folder float-right p-1"/>
                </th>
            </tr>
            </thead>
          <tbody>
          {
            this.props.courses.map((course, ndx) =>
              <CourseRow
                  updateCourse={this.props.updateCourse}
                deleteCourse={this.props.deleteCourse}
                key={ndx}
                course={course}
                title={course.title}
                owner={course.owner}
                lastModified={course.lastModified}
              />)
          }
          </tbody>
        </table>
      </div>
    )
  }
}
