import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import CourseRow from "./course-row";

const CourseGrid = ({
                        deleteCourse,
                        updateCourse,
                        courses}) =>
  <div className="d-flex flex-column">
      <div className="font-weight-bold d-flex flex-row justify-content-center p-1">
          <div className="mr-auto d-none d-md-table-cell">
              Recent Documents
          </div>
          <div className="d-none d-md-table-cell">
              Owned By me
              <i className="fas fa-sort-down"/>
          </div>
          <div className="ml-auto">
              <Link to="/courses/table">
                  <i className="fas fa-list float-right p-1"/>
              </Link>
              <i className="fa fa-sort-alpha-up-alt float-right p-1"/>
              <i className="fas fa-folder float-right p-1"/>
          </div>
      </div>
    <div className="d-flex flex-wrap card-deck">
    {
      courses.map(course =>
        <CourseCard
            updateCourse={updateCourse}
            deleteCourse={deleteCourse}
            key={course._id}
            course={course}
            title={course.title}
        />
      )
    }
    </div>
  </div>

export default CourseGrid
