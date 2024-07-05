import React from "react";
import { Link } from "react-router-dom";
import CoursesTable from "./CoursesTable";
import { useTranslation, Trans } from "react-i18next";

function CourseList() {
  const { t } = useTranslation();
  return (
    <div className="card">
      <h5 className="card-header">
        <Trans i18nKey="courses_list"></Trans>
      </h5>
      <div className="card-body">
        <CoursesTable />
      </div>
      <div className="card-footer">
        <Link className="btn btn-outline-secondary" to="/course-form">
          {t("add_course")}
        </Link>
      </div>
    </div>
  );
}

export default CourseList;
