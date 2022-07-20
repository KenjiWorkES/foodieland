import {
  Navbar,
  Footer,
  Slider,
  NewsletterForm,
  RecipeHeader,
} from "../../organisms";

const RecipesPage = () => {
  return (
    <>
      <Navbar />
      <main className="recipePage">
        <RecipeHeader />
        <NewsletterForm />
        <Slider length="4" title="You may like these recipe too" />
      </main>
      <Footer />
    </>
  );
};

export default RecipesPage;
