import "./recipeItem.scss";

const RecipeItem = ({ image, title, subtitle }) => {
  return (
    <li className="recipePage__item">
      <figure className="recipePage__figure">
        <img src={image} alt={image} className="recipePage__icon" />
        <figcaption className="recipePage__itemText">
          <h4 className="recipePage__itemTitle">{title}</h4>
          <p className="recipePage__itemSub">{subtitle}</p>
        </figcaption>
      </figure>
    </li>
  );
};

export default RecipeItem;
