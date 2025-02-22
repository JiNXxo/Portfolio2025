import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
    </div>
  );
};

export default App;
