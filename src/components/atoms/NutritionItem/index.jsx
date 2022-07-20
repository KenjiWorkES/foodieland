import "./nutritionItem.scss";

const NutritionItem = ({ label, value }) => {
  return (
    <li className="nutrition__item">
      <p className="nutrition__label">{label}</p>
      <p className="nutrition__value">{value}</p>
    </li>
  );
};

export default NutritionItem;
