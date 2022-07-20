import { RecipeList } from "../../molecules";
import "./recipeHeader.scss";

const RecipeHeader = () => {
  return (
    <section className="recipeHeader">
      <h1 className="recipeHeader__title">Health Japanese Fried Rice</h1>
      <RecipeList />
    </section>
  );
};

export default RecipeHeader;
