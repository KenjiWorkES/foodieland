const NutritionItem = ({ label, value }) => {
  return (
    <li className="recipePage__nutritionItem">
      <p className="recipePage__nutritionLabel">{label}</p>
      <p className="recipePage__nutritionValue">{value}</p>
    </li>
  );
};

export default NutritionItem;
