import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

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
