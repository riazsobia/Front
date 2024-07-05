import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Contact from "./Contact";
import CourseDetails from "./CourseDetails";
import CourseForm from "./CourseForm";
import CourseList from "./CoursesList";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotFound";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <ToastContainer autoClose={3000} />
        <NavBar />
        <Routes>
          <Route path="/" exact element={<CourseList />}></Route>
          <Route path="/course-details/:id" element={<CourseDetails />}></Route>
          <Route path="/course-form">
            <Route path=":id" element={<CourseForm />} />
            <Route path="" element={<CourseForm />} />
          </Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
