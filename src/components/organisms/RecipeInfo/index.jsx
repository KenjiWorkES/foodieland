import { NutritionInformation } from "../../molecules";
import "./recipeInfo.scss";

const RecipeInfo = () => {
  return (
    <section className="recipeInfo">
      <div className="recipeInfo__container">
        <img
          className="recipeInfo__mainImage"
          src="/assets/RecipeImage.png"
          alt="Main Image"
        />
        <NutritionInformation />
      </div>
      <p className="recipeInfo__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
  );
};

export default RecipeInfo;
