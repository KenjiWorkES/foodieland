import { NutritionItem } from "../../atoms";
import "./nutritionInformation.scss";

const NutritionInformation = () => {
  return (
    <div className="nutrition">
      <h2 className="nutrition__title">Nutrition Information</h2>
      <ul className="nutrition__list">
        <NutritionItem label="Calories" value="219.9 kcal" />
        <NutritionItem label="Total Fat" value="10.7 g" />
        <NutritionItem label="Protein" value="7.9 g" />
        <NutritionItem label="Carbohydrate" value="22.3 g" />
        <NutritionItem label="Cholesterol" value="37.4 mg" />
      </ul>
      <p className="nutrition__paragraph">
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
    </div>
  );
};

export default NutritionInformation;
