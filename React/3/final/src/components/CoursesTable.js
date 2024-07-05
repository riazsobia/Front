import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteCourse, getCourses } from "../api/coursesApi";
import "../styles/logo.css";
import "../styles/buttons.css";
import Star from "./Star";

const CoursesTable = () => {
  const [courses, setCourses] = useState([]);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    getCoursesList();
  }, []);

  function onLogoButtonClick() {
    setShowImage(!showImage);
  }

  function handleStarClick(rating) {
    console.log(`Kliknięto ${rating}`);
  }

  function deleteCourseById(id) {
    deleteCourse(id).then(() => {
      getCoursesList();
    });
  }

  function getCoursesList() {
    getCourses().then((_courses) => {
      setCourses(_courses);
    });
  }

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>
              <button
                className={
                  showImage ? "center btn btn-danger" : "center btn btn-success"
                }
                type="button"
                onClick={onLogoButtonClick}
              >
                {showImage ? "Ukryj" : "Pokaż"} logo
              </button>
            </th>
            <th>Nazwa</th>
            <th>Kategoria</th>
            <th>Cena</th>
            <th>Czas trwania</th>
            <th>Ocena</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return (
              <tr key={course.id}>
                <td>
                  {showImage && (
                    <img
                      className="logo center"
                      src={course.logoUrl}
                      alt={course.name}
                    />
                  )}
                </td>
                <td>
                  <Link to={"/course-details/" + course.id}>{course.name}</Link>
                </td>
                <td>{course.category}</td>
                <td>{course.price} PLN</td>
                <td>{course.duration}</td>
                <td>
                  <Star
                    rating={course.rating}
                    onClick={(rating) => handleStarClick(rating)}
                  />
                </td>
                <td>
                  <span
                    className="fas fa-times delete"
                    onClick={() => deleteCourseById(course.id)}
                  ></span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesTable;
