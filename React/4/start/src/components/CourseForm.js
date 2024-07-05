import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCategories } from "../api/categoryApi";
import { getCourseById, saveCourse } from "../api/coursesApi";
import CheckBox from "./common/CheckBox";
import Input from "./common/Input";
import Select from "./common/Select";
import { toast } from "react-toastify";

const CourseForm = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [course, setCourse] = useState({
    id: null,
    name: "",
    category: "",
    price: 0,
    duration: 0,
    description: "",
    rating: 0,
    logoUrl: "",
    active: false,
  });

  useEffect(() => {
    if (id) {
      getCourseById(id).then((_course) => {
        setCourse(_course);
      });
    }
  }, [id]);

  useEffect(() => {
    getCategories().then((_categories) => {
      setCategories(_categories);
    });
  }, []);

  function handleChange({ target }) {
    let value;
    switch (target.type) {
      case "checkbox":
        value = target.checked;
        break;
      default:
        value = target.value;
        break;
    }
    setCourse({ ...course, [target.name]: value });
  }

  function handleBlur({ target }) {
    setTouched({ ...touched, [target.name]: true });
    setIsSubmitEnabled(!hasValidationErrors());
  }

  function hasValidationErrors() {
    const _errors = {};
    if (!course.name) _errors.name = "Nazwa kursu jest wymagana";
    if (!course.category) _errors.category = "Kategoria kursu jest wymagana";
    if (course.price < 0)
      _errors.price = "Cena kursu nie może być mniejsza niż 0";
    if (course.duration < 0)
      _errors.duration = "Czas trwania kursu nie może być mniejsza niż 0";
    if (course.rating < 0 || course.rating > 5)
      _errors.rating =
        "Ocena kursu nie może być mniejsza niż 0 i większa niż 5";

    setErrors(_errors);
    return Object.keys(_errors).length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (hasValidationErrors()) {
      return;
    }
    saveCourse(course).then(() => {
      navigate("/");
      toast.success("Kurs zapisany!");
    });
  }

  function handleCancel() {
    navigate("/");
  }

  return (
    <div className="card">
      <div className="card-header">
        {course.id ? "Edycja" : "Dodawanie"} kursu
      </div>
      <div className="card-body container">
        <form onSubmit={handleSubmit}>
          <Input
            id="name"
            type="text"
            name="name"
            label="Nazwa"
            value={course.name}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.name}
            error={errors.name}
          />
          <Select
            label="Kategoria"
            id="category"
            name="category"
            value={course.category}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.category}
            touched={touched.category}
            options={categories}
          />
          <Input
            id="price"
            name="price"
            type="number"
            label="Cena"
            value={course.price}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.price}
          />
          <Input
            id="duration"
            name="duration"
            type="number"
            label="Czas trwania"
            value={course.duration}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.duration}
          />
          <Input
            id="rating"
            name="rating"
            type="number"
            label="Ocena"
            value={course.rating}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.rating}
          />
          <div className="mb-3">
            <label htmlFor="description">Opis</label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              name="description"
              value={course.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <CheckBox
            label="Aktywny"
            id="active"
            name="active"
            value={course.active}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="btn btn-primary me-2"
            disabled={!isSubmitEnabled}
          >
            Zapisz
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleCancel}
          >
            Anuluj
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;
