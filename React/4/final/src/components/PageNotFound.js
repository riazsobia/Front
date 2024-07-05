import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="card">
      <h5 className="card-header">Nie znaleziono strony</h5>
      <div className="card-body">
        <Link to="/" className="btn btn-outline-secondary">
          Powrót
        </Link>
      </div>
    </div>
  );
}
export default PageNotFound;
