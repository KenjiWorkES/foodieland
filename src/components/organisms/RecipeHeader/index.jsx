import { RecipeList } from "../../molecules";
import { CircularButton } from "../../atoms";
import "./recipeHeader.scss";

const RecipeHeader = () => {
  return (
    <section className="recipeHeader">
      <h1 className="recipeHeader__title">Health Japanese Fried Rice</h1>
      <RecipeList />
      <div className="recipeHeader__actions">
        <CircularButton label="print" image="/assets/printer.svg" />
        <CircularButton label="share" image="/assets/share.svg" />
      </div>
    </section>
  );
};

export default RecipeHeader;
