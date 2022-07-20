import { NutritionItem } from "../../atoms";

const NutritionInformation = () => {
  return (
    <div className="recipePage__nutrition">
      <h2 className="recipePage__nutritionTitle">Nutrition Information</h2>
      <ul className="recipePage__nutritionList">
        <NutritionItem label="Calories" value="219.9 kcal" />
        <NutritionItem label="Total Fat" value="10.7 g" />
        <NutritionItem label="Protein" value="7.9 g" />
        <NutritionItem label="Carbohydrate" value="22.3 g" />
        <NutritionItem label="Cholesterol" value="37.4 mg" />
      </ul>
      <p className="recipePage__nutritionParagraph">
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
    </div>
  );
};

export default NutritionInformation;
