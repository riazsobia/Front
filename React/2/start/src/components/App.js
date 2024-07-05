import React from "react";
import CourseList from "./CoursesList";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Witajcie w Course App!</h1>
        <CourseList />
      </div>
    );
  }
}

export default App;
