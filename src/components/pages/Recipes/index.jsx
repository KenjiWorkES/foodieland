import {
  Navbar,
  Footer,
  Slider,
  NewsletterForm,
  RecipeHeader,
  RecipeInfo,
} from "../../organisms";

const RecipesPage = () => {
  return (
    <>
      <Navbar />
      <main className="recipePage">
        <RecipeHeader />
        <RecipeInfo />
        <NewsletterForm />
        <Slider length="4" title="You may like these recipe too" />
      </main>
      <Footer />
    </>
  );
};

export default RecipesPage;
