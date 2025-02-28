import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
    </div>
  );
};

export default App;
