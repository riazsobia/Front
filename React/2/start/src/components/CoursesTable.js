import { useEffect, useState } from "react";
import { getCourses } from "../api/heroesApi";
import "../styles/logo.css";

const CoursesTable = () => {
  const [courses, setCourses] = useState([]);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    getCourses().then((_heroes) => {
      setCourses(_heroes);
    });
  }, []);

  function onLogoButtonClick() {
    setShowImage(!showImage);
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
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return (
              <tr>
                <td>
                  {showImage && (
                    <img
                      className="logo center"
                      src={course.logoUrl}
                      alt={course.name}
                    />
                  )}
                </td>
                <td>{course.name}</td>
                <td>{course.category}</td>
                <td>{course.price} PLN</td>
                <td>{course.duration}</td>
                <td>{course.rating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesTable;
