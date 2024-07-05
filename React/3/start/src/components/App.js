import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import CourseDetails from "./CourseDetails";
import CourseList from "./CoursesList";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotFound";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<CourseList />}></Route>
          <Route path="/course-details/:id" element={<CourseDetails />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
