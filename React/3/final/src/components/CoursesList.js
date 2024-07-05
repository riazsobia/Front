import React from "react";
import { Link } from "react-router-dom";
import CoursesTable from "./CoursesTable";

function CourseList() {
  return (
    <div className="card">
      <h5 className="card-header">Lista kursów</h5>
      <div className="card-body">
        <CoursesTable />
      </div>
      <div className="card-footer">
        <Link className="btn btn-outline-secondary" to="/course-form">
          Dodaj kurs
        </Link>
      </div>
    </div>
  );
}

export default CourseList;
