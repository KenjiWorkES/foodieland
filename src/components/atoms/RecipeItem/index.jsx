import "./recipeItem.scss";

const RecipeItem = ({ image, title, subtitle }) => {
  return (
    <li className="recipeHeader__item">
      <figure className="recipeHeader__figure">
        <img src={image} alt={image} className="recipeHeader__icon" />
        <figcaption className="recipeHeader__itemText">
          <h4 className="recipeHeader__itemTitle">{title}</h4>
          <p className="recipeHeader__itemSub">{subtitle}</p>
        </figcaption>
      </figure>
    </li>
  );
};

export default RecipeItem;
