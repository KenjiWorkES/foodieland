import { Navbar, Footer, Slider, NewsletterForm } from "../../organisms";

const RecipesPage = () => {
  return (
    <>
      <Navbar />
      <main className="recipePage">
        <NewsletterForm />
        <Slider length="4" title="You may like these recipe too" />
      </main>
      <Footer />
    </>
  );
};

export default RecipesPage;
