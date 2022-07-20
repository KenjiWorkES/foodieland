import { RecipeList } from "../../molecules";
import "./recipeHeader.scss";

const RecipeHeader = () => {
  return (
    <section className="recipePage__header">
      <h1 className="recipePage__title">Health Japanese Fried Rice</h1>
      <RecipeList />
    </section>
  );
};

export default RecipeHeader;
