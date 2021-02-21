import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>
  <div>
    <h2>
        <Link onClick={() => history.goBack()}>
            <i className="fas fa-arrow-left"/>
        </Link>
        Course Editor
        <i onClick={() => history.goBack()}
           className="fas fa-times float-right"/>
    </h2>
      <div className="d-flex flex-row">
          <div className="w-25">
              <ul className="list-group p-2">
                  <li className="list-group-item active">
                      Module 1 - JQuery
                      <i className="pull-right fa fa-trash"/>
                  </li>
                  <li className="list-group-item">
                      Module 2 - React
                      <i className="pull-right fa fa-trash"/>
                  </li>
                  <li className="list-group-item">Module 3 - Redux
                      <i className="pull-right fa fa-trash"/>
                  </li>
                  <li className="list-group-item">Module 4 - Native
                      <i className="pull-right fa fa-trash"/></li>
                  <li className="list-group-item">Module 5 - Angular
                      <i className="pull-right fa fa-trash"/></li>
                  <li className="list-group-item">Module 6 - Node
                      <i className="pull-right fa fa-trash"/></li>
                  <li className="list-group-item">Module 7 - Mongo
                      <i className="pull-right fa fa-trash"/></li>
              </ul>
              <div className="text-right"><i className="fa fa-plus"/></div>
          </div>
          <div className="w-75">
              <div className="row">
                  <ul className="nav nav-pills">
                      <li className="nav-item">
                          <a className="nav-link" aria-current="page" href="#">Topic 1</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link active" href="#">Topic 2</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Topic 3</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Topic 4</a>
                      </li>
                      <li className="nav-item">
                          <i className="fa fa-plus-square fa-2x"/>
                      </li>
                  </ul>
              </div>
              <div className="col-md">
                  <div className="row text-right">
                      <div className="col-10">
                          <a className="btn btn-success"
                             href="#">
                              Update
                          </a>
                      </div>
                      <div className="col-1">Preview</div>
                      <div className="col-1">
                          <i className="fa fa-toggle-on"/>
                      </div>
                  </div>
              </div>
              <div className="col">
                  <div className="card">
                      <div className="card-body">
                          <div className="card-header d-flex flex-row">
                              <div className="p-2">
                                  <h5>Heading Widget</h5>
                              </div>
                              <div className="ml-auto p-2">
                                  <div className="d-flex flex-row">
                                      <i className="fa fa-arrow-up p-2"/>
                                      <i className="fa fa-arrow-down p-2"/>
                                      <div className="col-sm-10">
                                          <select id="widget_type" className="form-control">
                                              <option>Heading</option>
                                              <option>Body</option>
                                              <option>Footer</option>
                                          </select>
                                      </div>
                                      <button type="button" className="close bg-red rounded" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                      </button>
                                  </div>
                              </div>
                          </div>
                          <div className="flex-row p-2">
                              <input className="form-control" placeholder="Heading Text"/>
                          </div>
                          <div className="flex-row p-2">
                              <select id="heading_type" className="form-control">
                                  <option>Heading 1</option>
                                  <option>Heading 2</option>
                                  <option>Heading 3</option>
                                  <option>Heading 4</option>
                                  <option>Heading 5</option>
                                  <option>Heading 6</option>
                              </select>
                          </div>
                          <div className="flex-row p-2">
                              <input className="form-control" placeholder="Widget name"/>
                          </div>
                          <div className="flex-row p-2">
                              <h4>Preview</h4>
                          </div>
                          <div className="flex-row p-2">
                              <h1>Heading text</h1>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col">
                  <div className="text-right red-color">
                      <i className="fa fa-plus-square-o fa-2x"/>
                  </div>
              </div>
          </div>
      </div>
  </div>

export default CourseEditor
