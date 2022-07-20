import { RecipeItem } from "../../atoms";
import "./recipeList.scss";

const ITEMS_ARRAY = [
  {
    image: "/assets/recipeAvatar.png",
    title: "Jonh Smith",
    subtitle: "15 March 2022",
  },
  {
    image: "/assets/Timer.svg",
    title: "Prep Time",
    subtitle: "15 Minutes",
  },
  {
    image: "/assets/Timer.svg",
    title: "Cook Time",
    subtitle: "15 Minutes",
  },
  {
    image: "/assets/ForkKnife.svg",
    title: "Chicken",
  },
];

const RecipeList = () => {
  return (
    <ul className="recipePage__list">
      {ITEMS_ARRAY.map((item) => (
        <RecipeItem
          image={item.image}
          title={item.title}
          subtitle={item.subtitle || null}
        />
      ))}
    </ul>
  );
};

export default RecipeList;
