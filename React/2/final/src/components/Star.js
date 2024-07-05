import "../styles/star.css";

function Star(props) {
  return (
    <div
      className="crop"
      style={{ width: props.rating ? (90 / 5) * props.rating : 0 }}
      title={props.rating}
      onClick={() => props.onClick(props.rating)}
    >
      <div className="stars">
        <span className="fa-solid fa-star"></span>
        <span className="fa-solid fa-star"></span>
        <span className="fa-solid fa-star"></span>
        <span className="fa-solid fa-star"></span>
        <span className="fa-solid fa-star"></span>
      </div>
    </div>
  );
}

export default Star;
