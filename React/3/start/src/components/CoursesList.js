import CoursesTable from "./CoursesTable";

function CourseList() {
  return (
    <div className="card">
      <h5 className="card-header">Lista kursów</h5>
      <div className="card-body">
        <CoursesTable />
      </div>
    </div>
  );
}

export default CourseList;
