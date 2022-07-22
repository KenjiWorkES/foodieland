import "./circularButton.scss";

const CircularButton = ({ label, image }) => {
  return (
    <div className="circularButton">
      <button className="circularButton__action">
        <img className="circularButton__image" src={image} alt="" />
      </button>
      <span className="circularButton__label">{label}</span>
    </div>
  );
};

export default CircularButton;
